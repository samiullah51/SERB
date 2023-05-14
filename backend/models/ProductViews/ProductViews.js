const mongoose = require("mongoose");

const ProductViews = new mongoose.Schema(
  {
    productId: {
      type: String,
    },
    viewer: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ProductViews", ProductViews);
