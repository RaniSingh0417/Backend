const mongoose = require("mongoose");

// outline,blueprint,model,How my documents looks inside the collection
//
const userSchema = new mongoose.Schema({
  name: String,
  rollno: Number,
  branch: String,
  age: Number,
  isFresher: Boolean,
});

const usermodel = mongoose.model("user", userSchema);
module.exports = usermodel;
