const TransactionModel = require("../models/transactionModel");
const { response } = require("express");

exports.getTransactions = async (req, res, next) => {
  try {
    const transactions = await TransactionModel.find();

    return res.status(200).json({
      success: true,
      count: transactions.length,
      data: transactions,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Error message",
    });
  }
};

exports.addTransactions = async (req, res, next) => {
  try {
    const { type, text, amount, merchant } = req.body;
    const transactions = await TransactionModel.create(req.body);

    return res.status(201).json({
      success: true,
      data: transactions,
    });
  } catch (err) {
    console.log(err);
    if (err.name === "ValidationError") {
      return res.status(400).json({
        success: false,
        err: err.errors,
      });
    } else {
      return res.status(500).json({
        success: false,
        error: err.errors,
      });
    }
  }
};

exports.deleteTransactions = async (res, req, next) => {
  try {
    const transcations = await TransactionModel.findById(req.params.id);
    if (!transactions) {
      return res.status(404).json({
        success: false,
        error: "No transaction found",
      });
    }
    await transactions.remove();
    return res.status(200).json({
      success: true,
      data: {},
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Error message",
    });
  }
};
