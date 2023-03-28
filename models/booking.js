const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  ticketNo: Number,
  custId: Number,
  custName: String,
  address: String,
  FlightID: Number,
  FlightName: String,
  dateOfJourney: Number,
  FlightCharges: Number,
  FlightClass: String,
  seats: Number,
});

const bookingModel = mongoose.model("booking", userSchema);
module.exports = bookingModel;
