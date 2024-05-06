const WebSocket = require("ws");

let messages = [];
let userSessions = {}; // 사용자 세션 정보와 메시지 읽음 상태 저장

function setupWebSocket(server) {
  const wss = new WebSocket.Server({ server });

  wss.on("connection", (ws, req) => {
    const userID = req.headers["sec-websocket-key"]; // 예시로 WebSocket Key 사용
    userSessions[userID] = {
      lastReadIndex: messages.length - 1,
      ws: ws,
    };

    ws.on("message", (message) => {
      const parsedMessage = JSON.parse(message);
      if (messages.length >= 200) {
        messages.shift();
      }
      messages.push({ ...parsedMessage, index: messages.length });

      Object.keys(userSessions).forEach((user) => {
        if (userSessions[user].ws.readyState === WebSocket.OPEN) {
          userSessions[user].ws.send(message);
          if (user !== userID) {
            userSessions[user].lastReadIndex = messages.length - 1;
          }
        }
      });
    });

    ws.on("close", () => {
      delete userSessions[userID];
    });
  });
}

module.exports = { setupWebSocket };
