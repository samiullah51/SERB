const router = require("express").Router();

const ProductViews = require("../../models/ProductViews/ProductViews");
const {
  verifyTokenAndAuthorization,
  verifyToken,
  verifyTokenAndAdmin,
} = require("../UserRoute/verifyToken");

// Add product

router.post("/add", async (req, res) => {
  const newViewer = new ProductViews(req.body);
  //   check exist
  try {
    const check = await ProductViews.findOne({
      userId: req.body.userId,
      productId: req.body.productId,
      viewer: req.body.viewer,
    });
    if (check) {
      res.status(201).json("Already viewed");
    } else {
      const savedViews = await newViewer.save();
      res.status(200).json(savedViews);
    }
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// // Get all the viewers of all products
router.get("/allviews/:userId", async (req, res) => {
  try {
    const allViews = await ProductViews.find({ userId: req.params.userId });
    allViews && res.status(200).json(allViews);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// Get all the viewers of the specific user
router.get("/allviews/find/:productId", async (req, res) => {
  try {
    const allViews = await ProductViews.find({
      productId: req.params.productId,
    });
    allViews && res.status(200).json(allViews);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

module.exports = router;
