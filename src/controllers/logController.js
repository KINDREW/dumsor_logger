const mongoose = require("mongoose");
const Log = require("../models/Log");

exports.logTime = async (req, res) => {
  try {
    const { startTime, endTime, location } = req.body;
    const newLog = new Log({
      startTime,
      endTime,
      location: location,
      user: req.user.id,
    });
    await newLog.save();
    res.status(201).json({ message: "Time logged successfully" });
  } catch (err) {
    console.error("Error logging time:", err.message);
    res.status(500).json({ message: "Server error" });
  }
};

exports.getLogs = async (req, res) => {
  try {
    const logs = await Log.find({ user: req.user.id });
    res.json(logs);
  } catch (err) {
    console.error("Error getting logs:", err.message);
    res.status(500).json({ message: "Server error" });
  }
};

exports.getLogsWithLocation = async (req, res) => {
  try {
    const { locationId } = req.params;
    const logs = await Log.find({ location: locationId });
    res.json(logs);
  } catch (err) {
    console.error("Error getting logs with location:", err.message);
    res.status(500).json({ message: "Server error" });
  }
};
