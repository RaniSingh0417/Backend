const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  classID: Number,
  courseCode: String,
  dayOfWeek: String,
  timeStart: String,
  teacherID: Number,
});

const classModel = mongoose.model("classes", userSchema);
module.exports = classModel;

// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema({
//   classID: Number,
//   courseCode: String,
//   dayOfWeek: String,
//   timeStart: String,
//   teacherID: Number,
// });

// const classModel = mongoose.model("Class", userSchema);
// module.exports = classModel;
