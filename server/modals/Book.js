const mongoose = require("mongoose");

const booksSchema = new mongoose.Schema({
    title: {type: String, required: false},
    image: {type: String, required: false},
    category: {type: String, required: false},
    ratings: {type: Number, required: false},
    description: {type: String, required: false},
    author: {type: String, required: false},
    price: {type: Number, required: false}

});

module.exports = mongoose.model("kitab", booksSchema);