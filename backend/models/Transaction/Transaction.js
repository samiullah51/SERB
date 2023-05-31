const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema(
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

    belongsToPicture: {
      type: String,
      required: true,
    },
    belongsToName: {
      type: String,
      required: true,
    },
    belongsToDescription: {
      type: String,
    },
    belongsToLevel: {
      type: Number,
      required: true,
    },
    belongsToRating: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Transactions", TransactionSchema);
