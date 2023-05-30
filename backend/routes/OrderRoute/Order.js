const router = require("express").Router();
const Order = require("../../models/Order/Order");
const {
  verifyTokenAndAuthorization,
  verifyToken,
  verifyTokenAndAdmin,
} = require("../UserRoute/verifyToken");

// Add transaction

router.post("/add", async (req, res) => {
  const newOrder = new Order(req.body);
  try {
    const savedOrder = await newOrder.save();
    res.status(200).json(savedOrder);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// Get all the transactions
router.get("/all", async (req, res) => {
  try {
    const allOrders = await Order.find();
    res.status(200).json(allOrders);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// Get all the transactions  of the specific user
router.get("/all/:userId", async (req, res) => {
  try {
    const allOrders = await Order.find({
      userId: req.params.userId,
    });
    res.status(200).json(allOrders);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// // Get profile Stats
// router.get("/stats/:userId", async (req, res) => {
//   const startOfDay = new Date();
//   startOfDay.setHours(0, 0, 0, 0); // Set time to the start of the day

//   try {
//     const data = await ProfileViews.aggregate([
//       {
//         $match: {
//           userId: req.params.userId, // Convert the user ID string to ObjectId
//         },
//       },
//       {
//         $group: {
//           _id: {
//             $dateToString: { format: "%Y-%m-%d", date: "$createdAt" },
//           },
//           count: { $sum: 1 },
//         },
//       },
//     ]).sort({ createdAt: -1 });
//     res.status(200).json(data);
//   } catch (err) {
//     res.status(500).json(err.message);
//   }
// });

module.exports = router;
