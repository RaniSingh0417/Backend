const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  actor_name: String,
  actor_age: Number,
});

const actorModel = mongoose.model("Actors_detail", userSchema);
module.exports = actorModel;
