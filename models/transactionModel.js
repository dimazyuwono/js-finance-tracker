const mongoose = require("mongoose");
const { text } = require("express");

const TransactionSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      uppercase: true,
      trim: true,
      required: [true, "Please define wether it's Withdrawal or Deposit"],
    },
    text: {
      type: String,
      uppercase: true,
      trim: true,
      required: [true, "Please add Transaction description"],
    },
    account: {
      type: String,
      required: [true,"Please define Account ID"]
    },
    amount: {
      type: Number,
      required: [true, "Please add Amount value"],
    },
    merchant: {
      type: String,
      required: [true, "Please add Merchant name"],
    },
  },
  {
    timestamps: true,
    autoIndex: true,
  }
);

module.exports = mongoose.model("Transaction", TransactionSchema);
