const express = require("express");
const { createComment } = require("../controllers/commentController");
const { createPost } = require("../controllers/postController");
const router = express.Router();

router.post("/comment", createComment);
router.post("/create/post", createPost);

module.exports=router;