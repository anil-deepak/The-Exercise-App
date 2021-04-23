const users = require("./users");
const { v4: uuidv4 } = require("uuid");

const list = [
  {
    id: "001",
    name: "Push Ups",
    type: "A1",
    duration: "60",
    calories: "100",
    time: Date(),
    user_handle: "@johnsmith",
  },
  {
    id: "002",
    name: "Lat Pull Downs",
    type: "A4",
    duration: "120",
    calories: "100",
    time: Date(),
    user_handle: "@johnsmith",
  },
  {
    id: "003",
    name: "Star Push Ups",
    type: "A4",
    duration: "60",
    calories: "100",
    time: Date(),
    user_handle: "@vp",
  },
];

const listWithOwner = () =>
  list.map((x, i) => ({
    ...x,
    id: i,
    user: users.GetByHandle(x.user_handle),
  }));

module.exports.GetAll = () => {
  return listWithOwner();
};

module.exports.GetWall = (handle) => {
  return listWithOwner().filter((exercise) => exercise.user_handle === handle);
};

module.exports.Add = (exercise) => {
  if (!exercise.user_handle) {
    throw { code: 422, msg: "Exercise must have an Owner" };
  }
  list.push(exercise);
  return { ...exercise };
};

module.exports.Update = (exercise_id, exercise) => {
  const oldObj = list[exercise_id];
  const newObj = { ...oldObj, ...exercise };
  list[exercise_id] = newObj;
  return newObj;
};

module.exports.Delete = (exercise_id) => {
  const exercise = list[exercise_id];
  list.splice(exercise_id, 1);
  return exercise;
};
