//Alicia Singca | 301336105 | 02-23-2024
const express = require("express");
const router = express.Router();
const {
  getAllCategory,
  createCategory,
} = require("../controllers/category.controller");

// GET all categories (api/categories)
router.get("/api/categories", getAllCategory);

// POST add new category (api/products)
router.post("/api/categories", createCategory);

module.exports = router;
