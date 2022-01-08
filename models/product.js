const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  item: { type: String, required: true, trim: true },
  description: String,
  price: Number,
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
