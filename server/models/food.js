const users = require("./users");

const list = [
  {
    name: "Pork & Omlette",
    type: "Non Vegan",
    qty: "200",
    calories: "100",
    time: Date(),
    handle: "johnsmith",
  },
  {
    name: "Millets",
    type: "Vegan",
    qty: "500",
    calories: "600",
    time: Date(),
    handle: "vp",
  },
  {
    name: "Green Salad",
    type: "Vegan",
    qty: "300",
    calories: "70",
    time: Date(),
    handle: "johnsmith",
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
  return listWithOwner().filter((food) => food.handle === handle);
};

module.exports.Add = (food) => {
  if (!food.handle) {
    throw { code: 422, msg: "Food must have an Owner" };
  }
  list.push(food);
  return { ...food };
};

module.exports.Update = (food_id, food) => {
  const oldObj = list[food_id];
  const newObj = { ...oldObj, ...food };
  list[food_id] = newObj;
  return newObj;
};

module.exports.Delete = (food_id) => {
  const food = list[food_id];
  list.splice(food_id, 1);
  return food;
};
