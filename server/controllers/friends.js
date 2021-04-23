const express = require("express");
const users = require("../models/users");

const app = express.Router();

// send friend request
app.post("/:handle", (req, res) => {
  res.send(users.sendFriendRequest(req.user.id, req.params.handle));
});

// accept friend request
app.post("/accept/:handle", (req, res) => {
  res.send(users.acceptFriendRequest(req.user.id, req.params.handle));
});

module.exports = app;
