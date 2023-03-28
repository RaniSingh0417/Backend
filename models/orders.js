const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  orderNumber: Number,
  orderDate: Number,
  shippedDate: Number,
  status: String,
  comments: String,
  customerNumber: Number,
});

const orderModel = mongoose.model("Order", userSchema);
module.exports = orderModel;
