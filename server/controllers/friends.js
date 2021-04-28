const express = require("express");
const users = require("../models/users");

const app = express.Router();

// send friend request
app.post("/send/:handle", (req, res) => {
  res.send(users.sendFriendRequest(req.user.id, req.params.handle));
});

// accept friend request
app.post("/accept/:handle", (req, res) => {
  res.send(users.acceptFriendRequest(req.user.id, req.params.handle));
});

app.delete("/delete/:handle", (req, res) => {
  res.send(users.removeFriend(req.user.id, req.params.handle));
});
app.delete("/reject/:handle", (req, res) => {
  res.send(users.rejectRequest(req.user.id, req.params.handle));
});

app.get("/", (req, res) => {
  res.send(users.getFriends(req.user.id));
});

app.get("/requests", (req, res) => {
  res.send(users.getRequests(req.user.id));
});
module.exports = app;
