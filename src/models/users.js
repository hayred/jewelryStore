const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  // url string for thumbnail image
  userName: {
    type: String,
    default: "",
    unique: true
  },
  // url for recipe web page - unique index
  password: {
    type: String,
    default: "",
    unique: true
  }
});

const Users = mongoose.model("User", userSchema);

module.exports = Users;