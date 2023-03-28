const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  tweet: String,
  tweetPhoto: String,
  likes: Number,
  comment: Number,
  tweetedBy: String,
});

const userModel = mongoose.model("tweet", userSchema);
module.exports = userModel;
