const WebSocket = require("ws");

let messages = [];
let userSessions = {};

function setupWebSocket(server) {
  const wss = new WebSocket.Server({ server });

  wss.on("connection", (ws, req) => {
    // console.log("New client connected");
    messages.forEach((message) => {
      ws.send(message);
    });

    const userID = req.headers["sec-websocket-key"];
    userSessions[userID] = {
      lastReadIndex: messages.length - 1,
      ws: ws,
    };

    ws.on("message", (message) => {
      // console.log("Raw message received:", message);
      // const parsedMessage = JSON.parse(message);
      const messageBuffer = Buffer.from(message);
      if (messages.length >= 200) {
        messages.shift();
      }

      // console.log("Received message:", messageBuffer.toString());

      messages.push(messageBuffer);
      // messages.push({ ...parsedMessage, index: messages.length });
      // const messageString = JSON.stringify(parsedMessage); // 객체를 문자열로 변환

      Object.keys(userSessions).forEach((user) => {
        if (userSessions[user].ws.readyState === WebSocket.OPEN) {
          // userSessions[user].ws.send(messageString);
          if (user !== userID) {
            userSessions[user].lastReadIndex = messages.length - 1;
          }
        }
      });

      wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(message);
        }
      });
    });

    ws.on("close", () => {
      delete userSessions[userID];
    });
  });
}

module.exports = { setupWebSocket };
