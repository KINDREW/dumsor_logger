const passport = require("passport");

exports.authenticateUser = passport.authenticate("jwt", { session: false });
