const express = require("express");
const { createTodo } = require("../controllers/createTodo");
const { getAllTodos } = require("../controllers/getAllTodo");
const { getSingleTodo } = require("../controllers/getSingleTodo");
const { updateTodo } = require("../controllers/updateTodo");
const { deleteTodo } = require("../controllers/deleteTodo");
const router = express.Router();

router.post("/create", createTodo);
router.get("/getall", getAllTodos);
router.get("/getsingle/:id", getSingleTodo);
router.put("/update/:id", updateTodo);
router.delete("/delete/:id", deleteTodo)

module.exports = router;