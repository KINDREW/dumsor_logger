const Location = require("../models/Location");

// Add Location
exports.addLocation = async (req, res) => {
  const { name } = req.body;
  try {
    const location = new Location({ user: req.user.id, name });
    await location.save();
    res.json(location);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

// Get User's Locations
exports.getLocation = async (req, res) => {
  try {
    const locations = await Location.find({ user: req.user.id });
    res.json(locations);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};
