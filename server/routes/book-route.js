const { Router } = require('express');
const express = require('express');
const router = express.Router();
const Book = require("../models/Book")
const booksController = require("../controllers/books-controller")


router.get("/", booksController.getAllBooks);
router.post("/", booksController.addBook);
// router.post("/:id", booksController.)

module.exports = router;