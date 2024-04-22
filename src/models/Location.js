const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  name: { type: String, required: true },
});

module.exports = mongoose.model("Location", locationSchema);
