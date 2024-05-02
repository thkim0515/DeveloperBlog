const loadSecrets = require("./loadSecrets");
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const http = require("http");
const { setupWebSocket } = require("./websocket");

const app = express();
app.use(
  express.json({
    limit: "1mb",
  })
);
app.use(
  express.urlencoded({
    limit: "1mb",
    extended: false,
  })
);

loadSecrets().then((secrets) => {
  const DATABASE = secrets.REACT_APP_DATABASE;
  const uri = `${DATABASE}starblog?retryWrites=true&w=majority`;

  mongoose
    .connect(uri)
    .then(() => console.log("DB 연결 확인 - STARBLOG"))
    .catch((err) => console.error(err));
});

const server = http.createServer(app);
setupWebSocket(server);

const PORT = 5000;
const { router } = require("./error/processError");
const users = require("./user/users");
const email = require("./user/email");
const contents = require("./contents/contents");
const comments = require("./contents/comments");
const project = require("./contents/project");
const endecrypt = require("./contents/endecrypt");
const s3bucket = require("./contents/s3bucket");

app.use(bodyParser.json());
app.use(router);
app.use("/users", users);
app.use("/email", email);
app.use("/contents", contents);
app.use("/comments", comments);
app.use("/project", project);
app.use("/endecrypt", endecrypt);
app.use("/s3bucket", s3bucket);

app.use(express.static(path.join(__dirname, "../build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

server.listen(PORT, () => {
  // 필요시 작성
  console.log(`Server >> http://localhost:${PORT} `);
});

// ref. https 상태코드 >> https://developer.mozilla.org/ko/docs/Web/HTTP/Status
