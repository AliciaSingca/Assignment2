//Alicia Singca | 301336105 | 02-23-2024
const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true, 
  },
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
