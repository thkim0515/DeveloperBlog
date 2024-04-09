const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const app = express();
const PORT = 5000 || process.env.PORT;
const DATABASE = process.env.DATABASE;
const uri = `${DATABASE}starblog?retryWrites=true&w=majority`;

mongoose
  .connect(uri)
  .then(() => console.log("DB 연결 확인 - STARBLOG"))
  .catch((err) => console.error(err));

const users = require("./user/users");
const contents = require("./contents/contents");
const comments = require("./contents/comments");

app.use(bodyParser.json());
app.use("/users", users);
app.use("/contents", contents);
app.use("/comments", comments);

app.use(express.static(path.join(__dirname, "../build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
