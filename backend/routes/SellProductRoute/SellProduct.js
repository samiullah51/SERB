const Product = require("../../models/SellProduct/Product");
const router = require("express").Router();
const {
  verifyTokenAndAuthorization,
  verifyToken,
} = require("../../routes/UserRoute/verifyToken");
// Add product
router.post("/sell/add", verifyToken, async (req, res) => {
  const newProduct = new Product(req.body);
  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// Get all Products
router.get("/recentproducts", async (req, res) => {
  try {
    const recentProducts = await Product.find()
      .limit(12)
      .sort({ createdAt: -1 });
    res.status(200).json(recentProducts);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// Related Products
router.get("/relatedproducts", async (req, res) => {
  const qCategory = req.query.category;
  try {
    const relatedProducts = await Product.find({
      category: {
        $in: [qCategory],
      },
    })
      .limit(5)
      .sort({ createdAt: -1 });
    res.status(200).json(relatedProducts);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

module.exports = router;
