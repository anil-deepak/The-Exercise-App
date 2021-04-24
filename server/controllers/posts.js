const express = require("express");
const users = require("../models/users");
const posts = require("../models/posts");

const app = express.Router();

app.get("/", (req, res) => {
  res.send(posts.GetAll());
});
app.get("/:post_id", (req, res) => {
  if (+req.params.post_id) {
    res.send(posts.Get(req.params.post_id));
  } else {
    res.send(posts.GetWall(req.params.post_id));
  }
});

app.post("/", (req, res) => {
  req.body.handle = req.user.handle;

  res.send(posts.Add(req.body));
});

app.patch("/:post_id", (req, res) =>
  res.send(posts.Update(req.params.post_id, req.body))
);

app.delete("/:post_id", (req, res) =>
  res.send(posts.Delete(req.params.post_id))
);

module.exports = app;
