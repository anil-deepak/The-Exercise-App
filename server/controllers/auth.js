const express = require("express");
const model = require("../models/users");

const app = express.Router();

app
  .post("/register", (req, res, next) => {
    model
      .Register(req.body)
      .then((user) => res.send(user))
      .catch(next);
  })
  .post("/login", (req, res, next) => {
    model
      .Login(req.body.handle, req.body.password)
      .then((user) => res.send(user))
      .catch(next);
  });

module.exports = app;
