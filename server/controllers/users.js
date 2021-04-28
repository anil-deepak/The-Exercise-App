const express = require("express");
const model = require("../models/users");

const app = express.Router();

app
  .get("/", (req, res) => {
    res.json({ users: model.GetAll() });
  })
  .get("/:user_id", (req, res) => res.send(model.Get(req.params.user_id)))
  .post("/", (req, res) => {
    res.send(model.Add(req.body));
  })
  .patch("/:user_id", (req, res) =>
    res.send(model.Update(req.params.user_id, req.body))
  )
  .delete("/:user_id", (req, res) =>
    res.send(model.Delete(req.params.user_id))
  );

module.exports = app;
