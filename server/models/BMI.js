const users = require("./users");

const list = [
  {
    bmi: "24",
    time: Date(),
    handle: "johnsmith",
  },
  {
    bmi: "27",
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
  return listWithOwner().filter((bmi) => bmi.handle === handle);
};

module.exports.Add = (bmi) => {
  if (!bmi.handle) {
    throw { code: 422, msg: "BMI must have an Owner" };
  }
  list.push(bmi);
  return { ...bmi };
};

module.exports.Update = (bmi_id, bmi) => {
  const oldObj = list[bmi_id];
  const newObj = { ...oldObj, ...bmi };
  list[bmi_id] = newObj;
  return newObj;
};

module.exports.Delete = (bmi_id) => {
  const bmi = list[bmi_id];
  list.splice(bmi_id, 1);
  return bmi;
};
