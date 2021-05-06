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
    requests: [],
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
    requests: [],
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
    requests: [],
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

  list.push({ ...user, friends: [], requests: [], isAdmin: false });
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
    throw { code: 300, msg: "Sorry there is no user with that handle" };

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
  const user = list[user_id];
  // if the handle is already a friend or request is sent already

  // get the index of the handle in the list
  const handleIndex = list.findIndex((user) => user.handle === handle);
  if (handleIndex === -1) {
    throw { code: 401, message: "Handle Not found" };
  }

  const isFriend =
    user.friends.findIndex((friend) => friend.handle === handle) > -1;
  if (isFriend) {
    throw { code: 300, message: "Friend request already sent" };
  }

  // add handle of sender to the reciever
  list[handleIndex].requests.push(user.handle);

  // add the requested handle to the friends list
  list[user_id].friends.push({ handle, isApproved: false });
  return list[user_id];
};

module.exports.acceptFriendRequest = (user_id, handle) => {
  const user = list[user_id];
  // get the index of the handle in the list
  const handleIndex = list.findIndex((person) => person.handle === handle);
  if (handleIndex === -1) {
    throw { code: 401, message: "Handle Not found" };
  }

  const requestIndex = user.requests.findIndex((request) => request === handle);
  if (requestIndex === -1) {
    return { code: 404, message: "Request Not Found" };
  }

  const friendIndex = list[handleIndex].friends.findIndex(
    (friend) => friend.handle === user.handle
  );
  list[handleIndex].friends[friendIndex].isApproved = true;
  list[user_id].friends.push({ handle, isApproved: true });

  // remove the request in the user requests list
  list[user_id].requests.splice(requestIndex, 1);

  return list[user_id];
};

module.exports.removeFriend = (user_id, handle) => {
  const handleIndex = list[user_id].friends.findIndex(
    (friend) => friend.handle === handle
  );
  if (handleIndex === -1) {
    throw { code: 401, message: "Handle Not found" };
  }
  list[user_id].friends.splice(handleIndex, 1);

  const handleUserIndex = list.findIndex((user) => user.handle === handle);
  const userIndexInFriendList = list[handleUserIndex].friends.findIndex(
    (user) => user.handle === list[user_id].handle
  );
  list[handleUserIndex].friends.splice(userIndexInFriendList, 1);

  return list[user_id];
};

const getByHandle = (handle) => {
  const handleIndex = list.findIndex((user) => user.handle === handle);
  if (handleIndex !== -1) return { ...list[handleIndex], password: undefined };
};

module.exports.getFriends = (user_id) => {
  const friendsList = list[user_id].friends;
  let resList = [];
  for (let index = 0; index < friendsList.length; index++) {
    const friend = friendsList[index];
    if (friend.isApproved) resList.push(getByHandle(friend.handle));
  }
  return resList;
};

module.exports.rejectRequest = (user_id, handle) => {
  const userHandle = list[user_id].handle;
  const handleIndex = list.findIndex((user) => user.handle === handle);
  const requestHandleIndex = list[user_id].requests.findIndex(
    (request) => request === handle
  );

  // remove the user handle from the requests list
  if (requestHandleIndex === -1) {
    return { code: 404, message: "Requeste not found" };
  }

  list[user_id].requests.splice(requestHandleIndex, 1);

  const otherHandleIndex = list[handleIndex].friends.findIndex(
    (friend) => friend.handle === userHandle
  );
  list[user_id].friends.splice(otherHandleIndex, 1);

  return list[user_id];
};

module.exports.getRequests = (user_id) => {
  const requestsList = list[user_id].requests;
  let resList = [];
  for (let index = 0; index < requestsList.length; index++) {
    const userHandle = requestsList[index];
    resList.push(getByHandle(userHandle));
  }
  return resList;
};

module.exports.getSuggestions = (friendString) => {
  const users = list.filter(
    (user) =>
      user.firstName + " " + user.lastName.toLowerCase().indexOf(friendString.toLowerCase()) !== -1

  ).map((user) => user.firstName + " " + user.lastName);
  users.sort(function (a, b) {
    let x = a.toUpperCase(),
      y = b.toUpperCase();
    return x == y ? 0 : x > y ? 1 : -1;

  })
  return users;
}