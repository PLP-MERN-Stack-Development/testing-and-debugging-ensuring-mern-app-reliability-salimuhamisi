const express = require("express");
const cors = require("cors");
const postRoutes = require("./routes/postRoutes");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/posts", postRoutes);

app.use((err, req, res, next) => {
  console.error("SERVER ERROR:", err);
  res.status(500).json({ error: "Server error" });
});


module.exports = app;