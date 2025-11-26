const Post = require("../models/Post");

exports.createPost = async (req, res) => {
  try {
    if (!req.body.title)
      return res.status(400).json({ error: "Title required" });

    const post = await Post.create({
      ...req.body,
      author: req.user._id
    });

    res.status(201).json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getPosts = async (req, res) => {
  const { page = 1, limit = 100, category } = req.query;

  const query = category ? { category } : {};

  const posts = await Post.find(query)
    .skip((page - 1) * limit)
    .limit(parseInt(limit));

  res.status(200).json(posts);
};

exports.getPostById = async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (!post) return res.status(404).json({ error: "Not found" });
  res.json(post);
};

exports.updatePost = async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (!post) return res.status(404).json({ error: "Not found" });
  if (post.author.toString() !== req.user._id.toString())
    return res.status(403).json({ error: "Forbidden" });

  Object.assign(post, req.body);
  await post.save();

  res.json(post);
};

exports.deletePost = async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (!post) return res.status(404).json({ error: "Not found" });

  if (post.author.toString() !== req.user._id.toString())
    return res.status(403).json({ error: "Forbidden" });

  await post.deleteOne();

  res.json({ message: "Deleted" });
};
