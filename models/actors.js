const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    actor_name: String,
    actor_age: Number,
  },
  { timestamps: true } //this track timimg details (created at,updatedAt)
);

const actorModel = mongoose.model("Actors_detail", userSchema);
module.exports = actorModel;
