const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const cors = require("cors");
require("./config/db")();
require("./config/passport");

const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
    allowedHeaders: ["Authorization", "Content-Type"],
    credentials: true,
  })
);
app.use(bodyParser.json());
app.use(passport.initialize());

const authRoutes = require("./routes/authRoute");
const logRoutes = require("./routes/logRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/logs", logRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
