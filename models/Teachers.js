const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  teacherID: Number,
  name: String,
  phone: Number,
  email: String,
});

const teacherModel = mongoose.model("teacher", userSchema);
module.exports = teacherModel;
