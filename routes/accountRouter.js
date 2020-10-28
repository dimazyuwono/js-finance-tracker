const express = require("express");
const accountRouter = express.Router();
const {
  getAccounts,
  addAccounts,
  deleteAccounts,
} = require("../controllers/accountController");

accountRouter.route("/").get(getAccounts).post(addAccounts);
accountRouter.route("/:id").delete(deleteAccounts);

module.exports = accountRouter;
