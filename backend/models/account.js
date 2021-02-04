const mongoose = require("mongoose");

const accountSchema = mongoose.Schema({
  name: { type: String, required: true },
  gender: { type: String, required: true },
  about: { type: String, required: true }
});

module.exports = mongoose.model("Account", accountSchema);
