const path = require("path");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const morgan = require("morgan");
dotenv.config();

const { LoginRequired } = require("./controllers/security");

const usersController = require("./controllers/users");
const postsController = require("./controllers/posts");
const authController = require("./controllers/auth");
const inputsController = require("./controllers/inputs");
const friendsController = require("./controllers/friends");

const app = express();
const router = express.Router();
router
  .use((req, res, next) => {
    res.setHeader("Content-Type", "application/json");
    next();
  })
  .use("/auth", authController)
  .use("/users", LoginRequired, usersController)
  .use("/posts", LoginRequired, postsController)
  .use("/inputs", LoginRequired, inputsController)
  .use("/friends", LoginRequired, friendsController);
const port = process.env.PORT || 3000;

app
  .use(express.json())
  .use(express.static("./dist"))
  .use(cors())
  .use(morgan("dev"))
  .use("/", router);
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../dist")));
  app.get(/.*/, (req, res) =>
    res.sendFile(path.join(__dirname, "../dist/index.html"))
  );
}

app.use((error, req, res, next) => {
  console.error(error);

  res.status(error.code || 500);
  res.send({ msg: error.msg });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
