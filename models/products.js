const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  productCode: Number,
  productName: String,
  productVendor: String,
  productDescription: String,
  quantityInStock: Number,
  buyPrice: Number,
  MSRP: Number,
});

const productModel = mongoose.model("product", userSchema);
module.exports = productModel;
