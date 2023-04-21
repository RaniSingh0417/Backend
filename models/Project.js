const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  title: String,
  startDate: String,
  endDate: String,
  departmentID: Number,
  Incharge: String,
});

const projectModel = mongoose.model("Project", userSchema);
module.exports = projectModel;
