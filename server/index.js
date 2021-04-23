const path = require("path");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const { LoginRequired } = require("./controllers/security");

const usersController = require("./controllers/users");
const postsController = require("./controllers/posts");
const authController = require("./controllers/auth");
const inputsController = require("./controllers/inputs");
const friendsController = require("./controllers/friends");

const app = express();
const port = process.env.PORT || 3000;

app
  .use(express.json())
  .use(express.static("./dist"))
  .use(cors())

  .use("/auth", authController)
  .use("/users", usersController)
  .use("/posts", LoginRequired, postsController)
  .use("/inputs", LoginRequired, inputsController)
  .use("/friends", LoginRequired, friendsController)

  // All the way at the end of the pipeline. Return instead of not found
  .get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../docs/index.html"));
  })

  .use((error, req, res, next) => {
    console.error(error);

    res.status(error.code || 500);
    res.send({ msg: error.msg });
  });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
