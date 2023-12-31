const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    index: true,
  },
  verified: { type: Boolean, required: true, default: false },
  password: {
    type: String,
    required: true,
  },
  role: { type: String, required: true, default: "user" },
});

module.exports = mongoose.model("User", UserSchema);
