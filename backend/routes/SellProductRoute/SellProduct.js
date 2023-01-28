const Product = require("../../models/SellProduct/Product");
const router = require("express").Router();
const {
  verifyTokenAndAuthorization,
  verifyToken,
  verifyTokenAndAdmin,
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

// Get all products

router.get("/all", async (req, res) => {
  try {
    const allProducts = await Product.find().sort({ createdAt: -1 });
    res.status(200).json(allProducts);
  } catch (err) {
    res.status(500).json(err.message);
  }
});
// Get Recent Products
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

// Get all products of a specific user
router.get("/all/:userId", async (req, res) => {
  try {
    const recentProducts = await Product.find({
      userId: req.params.userId,
    }).sort({ createdAt: -1 });
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

// Update a product
router.put("/edit/:productId", verifyToken, async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.productId,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(201).json(updatedProduct);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// Delete a product
router.delete("/delete/:productId", verifyToken, async (req, res) => {
  try {
    const deleteProduct = await Product.findByIdAndDelete(req.params.productId);
    res.status(201).json({ message: "Product deleted successfully" });
  } catch (err) {
    res.status(500).json(err.message);
  }
});

module.exports = router;
