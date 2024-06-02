const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const logSchema = new Schema({
  startTime: { type: Date, required: true },
  endTime: { type: Date },
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  location: { type: mongoose.Schema.Types.ObjectId, ref: "Location" },
});

module.exports = mongoose.model("Log", logSchema);
