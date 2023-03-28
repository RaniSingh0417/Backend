const monggose = require("mongoose");

const userSchema = new mongoose.Schema({
  eventID: Number,
  eventType: String,
  eventDate: Number,
  userID: String,
  description: String,
});

const eventModel = mongoose.model("event", userSchema);
module.exports = eventModel;
