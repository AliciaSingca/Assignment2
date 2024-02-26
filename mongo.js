//Alicia Singca | 301336105 | 02-23-2024
const mongoose = require("mongoose");
require("dotenv").config();
const config = require('config');
const dbConfig = config.get('Marketplace.dev.MONGO_URL');

async function mongoConnect() {
  mongoose.set('strictQuery', false);
  await mongoose.connect(dbConfig);
  console.log("Marketplace Database connected..");
}

module.exports = {
  mongoConnect,
}