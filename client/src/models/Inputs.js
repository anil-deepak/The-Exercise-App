import api from "./axios";

export async function getExercises() {
  return await api.get("inputs/exercise");
}

export async function postExercise(exercise) {
  return await api.post("inputs/exercise", exercise);
}

export async function updateExercise(exercise_id, exercise) {
  return await api.patch(`inputs/exercise/${exercise_id}`, exercise);
}

export async function deleteExercises(exercise_id) {
  return await api.delete(`inputs/exercise/${exercise_id}`, exercise);
}

export async function getFoods() {
  return await api.get("inputs/food");
}

export async function postFood(food) {
  return await api.post("inputs/food", food);
}

export async function updateFood(food_id, food) {
  return await api.patch(`inputs/food/${food_id}`, food);
}

export async function deleteFood(food_id) {
  return await api.delete(`inputs/food/${food_id}`);
}

export async function getBMI() {
  return await api.get("inputs/bmi");
}

export async function postBMI(bmi) {
  return await api.post("inputs/bmi", bmi);
}
