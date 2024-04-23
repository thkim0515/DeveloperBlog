const loadSecrets = require("./loadSecrets");
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

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
// const DATABASE = process.env.REACT_APP_DATABASE;
// const uri = `${DATABASE}starblog?retryWrites=true&w=majority`;

// mongoose
//   .connect(uri)
//   .then(() => console.log("DB 연결 확인 - STARBLOG"))
//   .catch((err) => console.error(err));

const users = require("./user/users");
const contents = require("./contents/contents");
const comments = require("./contents/comments");
const email = require("./user/email");
const endecrypt = require("./contents/endecrypt");
const { router } = require("./error/processError");

app.use(bodyParser.json());
app.use("/users", users);
app.use("/contents", contents);
app.use("/comments", comments);
app.use("/email", email);
app.use("/endecrypt", endecrypt);
app.use(router);

app.use(express.static(path.join(__dirname, "../build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

server.listen(PORT, () => {
  console.log(`서버 가동 >> http://localhost:${PORT} << Ctrl + 클릭`);
});

// server.listen(5000, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });

// ref. https 상태코드 >> https://developer.mozilla.org/ko/docs/Web/HTTP/Status
