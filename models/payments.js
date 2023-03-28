const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  customerNumber: Number,
  CustomerName: String,
  checkNumber: Number,
  paymentDate: Number,
  amount: Number,
});
const paymentModel = mongoose.model("payment", userSchema);
module.exports = paymentModel;
