const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const app = express();
const PORT = process.env.PORT || 5000;
const DATABASE = process.env.DATABASE;
const uri = `${DATABASE}starblog?retryWrites=true&w=majority`;

console.log(uri);

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("DB 연결 확인 - STARBLOG"))
  .catch((err) => console.error(err));

const signUpData = require("./signupServer");
const getData = require("./getContents");

app.use(bodyParser.json());
app.use("/userdata", signUpData);
app.use("/userdata", getData);
app.use(express.static(path.join(__dirname, "../build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
