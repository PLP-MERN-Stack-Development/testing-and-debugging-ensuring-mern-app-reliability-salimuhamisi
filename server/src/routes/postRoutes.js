const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const posts = require("../controllers/postController");

router.post("/", auth, posts.createPost);
router.get("/", posts.getPosts);
router.get("/:id", posts.getPostById);
router.put("/:id", auth, posts.updatePost);
router.delete("/:id", auth, posts.deletePost);

module.exports = router;