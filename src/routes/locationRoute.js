const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const locationController = require("../controllers/locationController");

router.post(
  "/addlocation",
  authMiddleware.authenticateUser,
  locationController.addLocation
);
router.get(
  "/location",
  authMiddleware.authenticateUser,
  locationController.getLocation
);

module.exports = router;
