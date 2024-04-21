const express = require("express");
const { createTodo } = require("../controllers/createTodo");
const router = express.router();

router.post("/createTodo", createTodo);

module.exports = router;