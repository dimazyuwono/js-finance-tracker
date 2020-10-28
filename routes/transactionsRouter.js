const express = require("express");
const transactionRouter = express.Router();
const {
  getTransactions,
  addTransactions,
  deleteTransactions,
} = require("../controllers/transactionController");

transactionRouter.route("/").get(getTransactions).post(addTransactions);
transactionRouter.route("/:id").delete(deleteTransactions);

module.exports = transactionRouter;
