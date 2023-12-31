const User = require("../../models/auth/User");
const nodemailer = require("nodemailer");
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

const transporter = nodemailer.createTransport({
  host: process.env.smtpHost,
  port: process.env.smtpPort,
  secure: false,
  auth: {
    user: process.env.smtpUser,
    pass: process.env.smtpPassword,
  },
});

const sendMailUrl = (email, title, url) => {
  const html = `<div style='display: flex; justify-content: center;'>\
                  <a href='${url}' style='text-decoration: none; background-color: green; padding: 10px 20px; border-radius: 5px; color: white;'>${title}</a>\
                </div>`;
  sendMail(email, title, html).catch(console.error);
};
const sendMail = async (email, title, html) => {
  let info = await transporter.sendMail({
    from: process.env.smtpUser,
    to: email,
    subject: title,
    html: html,
  });
  console.log("Message sent: %s", info.messageId);
};

module.exports = {
  verifyEmail: async function (req, res) {
    const { token } = req.body;
    if (!token) {
      return res.status(403).send({ message: "No token provided!" });
    }
    jwt.verify(token, process.env.secretKey, async (error, decoded) => {
      if (!decoded || error) {
        res.status(400).json({ message: "incorrect token", data: null });
        return;
      }
      const { id, email } = decoded;
      const user = await User.findOne({ _id: id });
      if (user && user.email === email) {
        await User.findByIdAndUpdate(id, { verified: true });
        res.status(200).json({ message: null, data: user });
        return;
      }
      res.status(400).json({ message: "incorrect token", data: null });
    });
  },
  signup: async function (req, res) {
    const user = {
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8),
      role: "user",
    };
    User.create(user)
      .then((newUser) => {
        console.log(newUser);
        const mailCode = jwt.sign(
          {
            id: newUser._id,
            email: newUser.email,
          },
          process.env.secretKey,
          {
            algorithm: "HS256",
            allowInsecureKeySizes: true,
            expiresIn: process.env.emailExpiresIn,
          }
        );
        // send the mail here
        const url = `${process.env.frontend_url}/verifyEmail/${mailCode}`;
        const title = "Verify Email";
        // if (process.env.dev) console.log(mailCode);
        sendMailUrl(user.email, title, url);
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

        if (!user.verified) {
          return res.status(404).json({
            success: false,
            error: {
              email: "Not a verified email address!",
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
        // console.log("user just logged in:", req.body);
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
  // forgetPassword: async function (req, res, next) {
  //   const user = req.body;
  //   const domain = user.domain;
  //   user.findOne({ email: user.email }, function (err, userInfo) {
  //     if (!err && userInfo) {
  //       const mailCode = jwt.sign(
  //         {
  //           id: userInfo._id,
  //           expiredAt: new Date().getTime() + expiredAfter,
  //           email: userInfo.email,
  //           name: userInfo.name,
  //         },
  //         secretKey
  //       );
  //       // send the mail here

  //       let url = `${domain}/resetPassword/${mailCode}`;
  //       let title = "Reset Password";
  //       if (!dev) {
  //         const html = `<div style='display: flex; justify-content: center;'>\
  //                         <a href='${url}' style='text-decoration: none; background-color: green; padding: 10px 20px; border-radius: 5px; color: white;'>${title}</a>\
  //                       </div>`;
  //         transporter.sendMail(
  //           {
  //             from: smtpUsername,
  //             to: user.email,
  //             subject: title,
  //             html: html,
  //           },
  //           function (err, result) {
  //             if (err) console.log(err);
  //             else {
  //               console.log("success send to email");
  //               console.log("from", smtpUsername);
  //               console.log("to", user.email);
  //             }
  //           }
  //         );
  //       } else {
  //         console.log(url);
  //         console.log(title);
  //       }
  //       res.status(200).json({
  //         message: "User added successfully!!!",
  //         data: { id: userInfo._id },
  //       });
  //     } else {
  //       res.status(400).json({ message: "This user don't exist." });
  //     }
  //   });
  // },
  // changePassword: async function (req, res, next) {
  //   const user = req.body;
  //   user.findOne({ _id: user._id }, function (err, userInfo) {
  //     if (err) {
  //       res.status(500).json({ message: "Internal server error" });
  //     } else {
  //       if (
  //         userInfo != null &&
  //         bcrypt.compareSync(user.password, userInfo.password)
  //       ) {
  //         let newPassword = bcrypt.hashSync(user.newPassword, saltRounds);
  //         user.findByIdAndUpdate(
  //           userInfo._id,
  //           { password: newPassword },
  //           function (err, result) {
  //             if (err)
  //               res
  //                 .status(400)
  //                 .json({ message: "Update password failed", data: null });
  //             else {
  //               res
  //                 .status(200)
  //                 .json({
  //                   message: "Password is updated successfully!",
  //                   data: { id: result._id },
  //                 });
  //             }
  //           }
  //         );
  //       } else {
  //         res
  //           .status(400)
  //           .json({ message: "Invalid email/password!", data: null });
  //       }
  //     }
  //   });
  // },
  // resetPassword: async function (req, res, next) {
  //   const { token, password } = req.body;
  //   jwt.verify(token, secretKey, async (error, decoded) => {
  //     if (!error) {
  //       const { id, expiredAt } = decoded;
  //       if (expiredAt > new Date().getTime()) {
  //         let newPassword = bcrypt.hashSync(password, saltRounds);
  //         await user.findByIdAndUpdate(id, {
  //           confirm: true,
  //           password: newPassword,
  //         });
  //         res.status(200).json({ message: null, data: { id: id } });
  //         return;
  //       } else {
  //         res.status(400).json({ message: "token expired", data: null });
  //       }
  //     }
  //     res.status(400).json({ message: "incorrect token", data: null });
  //   });
  // },
  // checkToken: async function (req, res, next) {
  //   const { token } = req.body;
  //   jwt.verify(token, secretKey, async (error, decoded) => {
  //     if (!error) {
  //       const { id, expiredAt } = decoded;
  //       if (expiredAt > new Date().getTime()) {
  //         const user = await user.findOne({ _id: id });
  //         res.status(200).json({ message: null, data: user });
  //         return;
  //       }
  //     }
  //     res.status(400).json({ message: "incorrect token", data: null });
  //   });
  // },
};
