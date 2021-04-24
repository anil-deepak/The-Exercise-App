const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const SALT_ROUNDS = process.env.SALT_ROUNDS;
const JWT_SECRET = process.env.JWT_SECRET;

const list = [
  {
    firstName: "Moshe",
    lastName: "Plotkin",
    handle: "JewPaltz",
    email: "jewpaltz@123.com",
    pic: "https://bulma.io/images/placeholders/96x96.png",
    password: "$2b$08$ovDdePT2UjP9nkMaOhpFgOQEsBclWpB9RfS2p5XZwq.vDIzwNw5ke",
    isAdmin: true,
    friends: [
      { handle: "vp", isApproved: true },
      { handle: "johnsmith", isApproved: true },
    ],
  },
  {
    firstName: "Kamala",
    lastName: "Harris",
    handle: "vp",
    email: "kamalaharis@gmail.com",
    pic: "https://bulma.io/images/placeholders/96x96.png",
    password: "Her",
    isAdmin: true,
    friends: [{ handle: "johnsmith", isApproved: true }],
  },
  {
    firstName: "John",
    lastName: "Smith",
    handle: "johnsmith",
    email: "johnsmith@gmail.com",
    pic: "https://bulma.io/images/placeholders/96x96.png",
    password: "BeepBop",
    isAdmin: true,
    friends: [{ handle: "vp", isApproved: true }],
  },
];

module.exports.GetAll = () => list;

module.exports.Get = (user_id) => list[user_id];

module.exports.GetByHandle = (handle) => ({
  ...list.find((x, i) => x.handle == handle),
  password: undefined,
});

module.exports.Add = (user) => {
  if (!user.firstName) {
    throw { code: 422, msg: "First Name is required" };
  }
  list.push(user);
  return { ...user, password: undefined };
};

module.exports.Register = async (user) => {
  const hash = await bcrypt.hash(user.password, +SALT_ROUNDS);

  user.password = hash;

  if (!user.firstName) {
    throw { code: 422, msg: "First Name is required" };
  }

  list.push({ ...user, friends: [], isAdmin: false });
  return { ...user, password: undefined };
};

module.exports.Update = (user_id, user) => {
  const oldObj = list[user_id];
  console.log(list);
  if (user.firstName) {
    oldObj.firstName = user.firstName;
  }
  if (user.lastName) {
    oldObj.lastName = user.lastName;
  }
  if (user.handle) {
    oldObj.handle = user.handle;
  }
  if (user.email) {
    oldObj.email = user.email;
  }
  if (user.pic) {
    oldObj.pic = user.pic;
  }
  //list[user_id] = newObj ;
  return { ...oldObj, password: undefined };
};

module.exports.Delete = (user_id) => {
  const user = list[user_id];
  list.splice(user_id, 1);
  return user;
};

module.exports.Login = async (handle, password) => {
  console.log({ handle, password });
  const user = list.find((x) => x.handle === handle);
  const userIndex = list.findIndex((x) => x.handle === handle);
  if (!user)
    throw { code: 401, msg: "Sorry there is no user with that handle" };

  if (!(await bcrypt.compare(password, user.password))) {
    throw { code: 401, msg: "Wrong Password" };
  }

  const data = { ...user, id: userIndex, password: undefined };

  const token = jwt.sign(data, JWT_SECRET);

  return { user: data, token };
};

module.exports.FromJWT = (token) => {
  try {
    const user = jwt.verify(token, JWT_SECRET);
    return user;
  } catch (error) {
    console.log({ error });
    return null;
  }
};

module.exports.sendFriendRequest = (user_id, handle) => {
  let flag = true;
  for (let otherUser in list[user_id].friends) {
    if (otherUser.handle === handle) {
      flag = false;
      break;
    }
  }
  flag && list[user_id].friends.push({ handle: handle, isApproved: false });
  return list[user_id];
};

module.exports.acceptFriendRequest = (user_id, handle) => {
  for (let otherUser in list[user_id].friends) {
    if (otherUser.handle === handle && otherUser.isApproved === false) {
      otherUser.isApproved = true;
    }
  }
  return list[user_id];
};
