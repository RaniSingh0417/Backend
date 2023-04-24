const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    book_id: Number,
    title: String,
    totalPages: Number,
    rating: Number,
    published_Date: String,
    publisher_id: Number,
  },
  { timestamps: true }
);

const booksModel = mongoose.model("Books", userSchema);
module.exports = booksModel;
