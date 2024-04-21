const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const logController = require("../controllers/logController");

router.post("/log", authMiddleware.authenticateUser, logController.logTime);
router.get("/logs", authMiddleware.authenticateUser, logController.getLogs);

module.exports = router;
