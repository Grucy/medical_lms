const User = require("../models/auth/User");

const checkDuplicateEmail = (req, res, next) => {
  User.findOne({
    email: req.body.email,
  })
    .then((user) => {
      if (user) {
        res
          .status(200)
          .json({
            success: false,
            message: "Failed! Email is already in use!",
          });
        return;
      }
      next();
    })
    .catch((err) => {
      res.status(500).json({ success: false, message: err });
    });
};

module.exports = {
  checkDuplicateEmail,
};
