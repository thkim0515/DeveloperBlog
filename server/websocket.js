const WebSocket = require("ws");

// 모든 메시지를 저장할 배열
let messages = [];

function setupWebSocket(server) {
  const wss = new WebSocket.Server({ server });

  wss.on("connection", (ws) => {
    console.log("클라이언트 연결");

    messages.forEach((message) => {
      ws.send(message);
    });

    ws.on("message", (message) => {
      messages.push(message);

      wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(message);
        }
      });
    });

    ws.on("close", () => {
      console.log("연결끊김");
    });
  });
}

module.exports = { setupWebSocket };
