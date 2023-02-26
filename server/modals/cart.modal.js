const mongoose = require("mongoose");

const cartSchema = mongoose.Schema(
  {
    id: Number,
    image: String,
    title: String,
    ratings: Number,
    price: Number,
    author: String,
    description: String,
    category: String,
   
  },
  {
    versionKey: false,
  }
);

const CartModel = mongoose.model("cart", cartSchema);

module.exports = { CartModel };
