const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  googleId: String,
  title: { type: String, required: true },
  authors: [{ type: String, required: true }],
  publisher: String,
  publishedDate: String,
  longDesc: String,
  pageCount: Number,
  avgRating: String,
  thumbnail: String,
  url: String,
  date: { type: Date, default: Date.now }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;


