const express = require("express");
const { createTodo } = require("../controllers/createTodo");
const { getAllTodos } = require("../controllers/getAllTodo");
const router = express.Router();

router.post("/create", createTodo);
router.get("/getall", getAllTodos);

module.exports = router;