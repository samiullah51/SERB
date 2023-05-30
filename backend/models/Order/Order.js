const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    condition: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },

    buyerPicture: {
      type: String,
      required: true,
    },
    buyerToName: {
      type: String,
      required: true,
    },
    buyerDescription: {
      type: String,
      required: true,
    },
    buyerToLevel: {
      type: String,
      required: true,
    },
    buyerToRating: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Orders", OrderSchema);
