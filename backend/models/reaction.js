const mongoose = require("mongoose");
const Account = require("./account");

const rectionSchema = mongoose.Schema({
  account: { type: Account, required: true },
  type: { type: String, required: true },
  updatedtime: { type: String, required: true }
});

module.exports = mongoose.model("Account", accountSchema);
