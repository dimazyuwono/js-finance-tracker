const TransactionModel = require("../models/transactionModel");
const AccountModel = require("../models/accountModel");
const { response } = require("express");

exports.getTransactions = async (req, res) => {
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

exports.addTransactions = async (req, res) => {
  try {
    try {
      const account = await AccountModel.findById(req.body.account);
      const update_account = await AccountModel.create({
        name: account.name,
        balance: account.balance - req.body.amount,
      });
    } catch (error) {
      console.log(error);
    }

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

exports.deleteTransactions = async (res, req) => {
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
