const express = require("express");
const exercises = require("../models/exercises");
const food = require("../models/food");
const bmi = require("../models/BMI");

const app = express.Router();

// get all the exercises
app.get("/exercise", (req, res) => {
  res.send(exercises.GetWall(req.user.handle));
});

// post the exercise details
app.post("/exercise", (req, res) => {
  req.body.user_handle = req.user.handle;
  res.send(exercises.Add(req.body));
});

// update the exercise details
app.patch("/exercise/:exercise_id", (req, res) => {
  req.body.user_handle = req.user.handle;
  res.send(exercises.Update(req.params.exercise_id, req.body));
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
  req.body.user_handle = req.user.handle;
  res.send(food.Add({ ...req.body, date: Date() }));
});

// update the food details
app.patch("/food/:food_id", (req, res) => {
  req.body.user_handle = req.user.handle;
  res.send(food.Update(req.params.food_id, req.body));
});

// delete the food details
app.delete("/food/:food_id", (req, res) => {
  res.send(food.Delete(req.params.food_id));
});

// get all the food input
app.get("/bmi", (req, res) => {
  res.send(bmi.GetWall(req.user.handle));
});

// post the bmi taken details
app.post("/bmi", (req, res) => {
  req.body.user_handle = req.user.handle;
  res.send(bmi.Add(req.body));
});

module.exports = app;
