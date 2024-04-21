const passport = require("passport");
const { Strategy, ExtractJwt } = require("passport-jwt");
const mongoose = require("mongoose");
const User = require("../models/User");

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,
};

passport.use(
  new Strategy(opts, async (jwt_payload, done) => {
    try {
      const user = await User.findById(jwt_payload.id);
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    } catch (err) {
      console.error("Error authenticating user:", err.message);
      return done(err, false);
    }
  })
);
