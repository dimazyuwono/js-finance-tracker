const mongoose = require("mongoose");

const AccountSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      uppercase: true,
      trim: true,
      required: [true, "Please define the name of the Account"],
    },
    balance: {
      type: Number,
      required: [true, "Please put the balance amount of the Account"],
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    autoIndex: true,
  }
);

module.exports = mongoose.model("Account", AccountSchema);
