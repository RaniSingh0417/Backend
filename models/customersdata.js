const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  customerNumber: String,
  customerName: String,
  phoneNumber: Number,
  city: String,
  state: String,
  postalCode: String,
  creditLimit: Number,
});
const customerModel = mongoose.model("customerData", userSchema);
module.exports = customerModel;
