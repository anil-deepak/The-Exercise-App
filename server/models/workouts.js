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
    handle: "johnsmith",
  },
  {
    id: "002",
    name: "Lat Pull Downs",
    type: "A4",
    duration: "120",
    calories: "100",
    time: Date(),
    handle: "johnsmith",
  },
  {
    id: "003",
    name: "Star Push Ups",
    type: "A4",
    duration: "60",
    calories: "100",
    time: Date(),
    handle: "vp",
  },
];

const listWithOwner = () =>
  list.map((x, i) => ({
    ...x,
    id: i,
    user: users.GetByHandle(x.handle),
  }));

module.exports.GetAll = () => {
  return listWithOwner();
};

module.exports.GetWall = (handle) => {
  return listWithOwner().filter((workout) => workout.handle === handle);
};

module.exports.Add = (workout) => {
  if (!workout.handle) {
    throw { code: 422, msg: "workout must have an Owner" };
  }
  list.push(workout);
  return { ...workout };
};

module.exports.Update = (workout_id, workout) => {
  const oldObj = list[workout_id];
  const newObj = { ...oldObj, ...workout };
  list[workout_id] = newObj;
  return newObj;
};

module.exports.Delete = (workout_id) => {
  const workout = list[workout_id];
  list.splice(workout_id, 1);
  return workout;
};
