const express = require("express");
const { createTodo } = require("../controllers/createTodo");
const { getAllTodos } = require("../controllers/getAllTodo");
const { getSingleTodo } = require("../controllers/getSingleTodo");
const router = express.Router();

router.post("/create", createTodo);
router.get("/getall", getAllTodos);
router.get("/getsingle/:id", getSingleTodo);

module.exports = router;