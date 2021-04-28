const express = require("express");
const workouts = require("../models/workouts");
const food = require("../models/food");

const app = express.Router();

// get all the exercises
app.get("/workout", (req, res) => {
  res.send(workouts.GetWall(req.user.handle));
});

// post the exercise details
app.post("/workout", (req, res) => {
  req.body.handle = req.user.handle;
  res.send(workouts.Add(req.body));
});

// update the exercise details
app.patch("/exercise/:exercise_id", (req, res) => {
  req.body.handle = req.user.handle;
  res.send(workouts.Update(req.params.exercise_id, req.body));
});

// delete the exercise details
app.delete("/exercise/:exercise_id", (req, res) => {
  res.send(exercises.Delete(req.params.exercise_id));
});

// get all the food input
app.get("/food", (req, res) => {
  res.send(food.GetWall(req.user.handle));
});

// post the food taken details
app.post("/food", (req, res) => {
  req.body.handle = req.user.handle;
  res.send(food.Add({ ...req.body, date: Date() }));
});

// update the food details
app.patch("/food/:food_id", (req, res) => {
  req.body.handle = req.user.handle;
  res.send(food.Update(req.params.food_id, req.body));
});

// delete the food details
app.delete("/food/:food_id", (req, res) => {
  res.send(food.Delete(req.params.food_id));
});

module.exports = app;
