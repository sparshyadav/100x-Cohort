const express = require("express");
const { createComment } = require("../controllers/commentController");
const { createPost } = require("../controllers/postController");
const { getAllPosts } = require("../controllers/allPostController");
const { likePost, unlikePost } = require("../controllers/likeController");
const router = express.Router();

router.post("/comment", createComment);
router.post("/create/post", createPost);
router.get("/getAll", getAllPosts);
router.post("/create/like", likePost);
router.post("/create/unlike", unlikePost);

module.exports = router;