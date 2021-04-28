const usersModel = require("../models/users");

module.exports.LoginRequired = async (req, res, next) => {
  console.log(req.headers.authorization);
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(" ")[1];
    req.user = token && usersModel.FromJWT(token);
    next();
  } else {
    next({
      code: 403,
      msg: "You need to be logged in to access this resource",
    });
  }
};
