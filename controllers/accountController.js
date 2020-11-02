const AccountModel = require("../models/accountModel");

exports.getAccounts = async (req, res) => {
  try {
    let accounts = await AccountModel.find();
    return res.status(200).json({
      success: true,
      count: accounts.length,
      data: accounts,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Error message",
    });
  }
};

exports.addAccounts = async (req, res) => {
  try {
    let accounts = await AccountModel.create(req.body);
    return res.status(200).json({
      success: true,
      data: accounts,
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      return res.status(400).json({
        success: false,
        error: error.errors,
      });
    } else {
      return res.status(500).json({
        success: false,
        error: error.errors,
      });
    }
  }
};

exports.deleteAccounts = async (req, res) => {
  try {
    let accounts = await AccountModel.findById(req.params.id);
    if (!accounts) {
      return res.status(400).json({
        success: false,
        error: "No Account found",
      });
    }
    await accounts.remove();
    return res.status(200).json({
      success: true,
      data: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Error message",
    });
  }
};
