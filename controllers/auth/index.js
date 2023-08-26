const User = require("../../models/auth/User");

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

module.exports = {
  signup: async function (req, res) {
    const user = {
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8),
      role: "user",
    };
    User.create(user)
      .then((newUser) => {
        console.log(newUser);
        res.status(200).json({
          success: true,
          message: "User created successfully!",
          user: newUser,
        });
      })
      .catch((err) => {
        console.error(err);
        res.status(404).json({
          success: false,
          error: { email: "Something went wrong!" },
          error: err,
        });
      });
  },
  signin: async function (req, res) {
    User.findOne({
      email: req.body.email,
    })
      .then((user) => {
        if (!user) {
          return res.status(404).json({
            success: false,
            error: {
              email: "Not a valid email address!",
            },
          });
        }

        var passwordIsValid = bcrypt.compareSync(
          req.body.password,
          user.password
        );

        if (!passwordIsValid) {
          return res.status(401).json({
            success: false,
            error: { password: "Invalid Password!" },
          });
        }
        console.log("user just logged in:", req.body);
        const token = jwt.sign({ id: user.id }, process.env.secretKey, {
          algorithm: "HS256",
          allowInsecureKeySizes: true,
          expiresIn: process.env.expiresIn,
        });

        res.status(200).json({
          success: true,
          message: "User logged in successfully!",
          user: {
            _id: user._id,
            email: user.email,
            token: token,
            role: user.role,
          },
        });
      })
      .catch((err) => {
        console.error(err);
        res
          .status(404)
          .json({ success: false, message: "User not found!", error: err });
      });
  },
  refresh: async function (req, res) {
    const token = req.headers["x-access-token"];
    const decoded = jwt.verify(token, process.env.secretKey);
    const userId = decoded.id;
    const user = await User.findById(userId);
    const newToken = jwt.sign({ id: userId }, process.env.secretKey, {
      algorithm: "HS256",
      allowInsecureKeySizes: true,
      expiresIn: process.env.expiresIn,
    });
    res.status(200).json({
      success: true,
      message: "Token refreshed successfully!",
      token: newToken,
      user,
    });
  },
  getAll: async function (req, res) {
    let users = await User.find();
    res.status(200).json({
      success: true,
      message: "Users retrieved successfully!",
      users: users,
    });
  },
};
