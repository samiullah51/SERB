const router = require("express").Router();
const ProfileViews = require("../../models/ProfileViews/ProfileViews");
const {
  verifyTokenAndAuthorization,
  verifyToken,
  verifyTokenAndAdmin,
} = require("../../routes/UserRoute/verifyToken");

// Add product

router.post("/add", async (req, res) => {
  const newViewer = new ProfileViews(req.body);
  //   check exist
  try {
    const check = await ProfileViews.findOne({
      userId: req.body.userId,
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

// Get all the viewers of the specific user
router.get("/allviews/:userId", async (req, res) => {
  try {
    const allViews = await ProfileViews.find({ userId: req.params.userId });
    allViews && res.status(200).json(allViews);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

module.exports = router;
