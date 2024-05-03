const WebSocket = require("ws");

// 모든 메시지를 저장할 배열
let messages = [];

function setupWebSocket(server) {
  const wss = new WebSocket.Server({ server });

  wss.on("connection", (ws) => {
    messages.forEach((message) => {
      ws.send(message);
    });

    ws.on("message", (message) => {
      // 메세지 개수 200개 넘어가면 0번부터 지우기
      if (messages.length >= 200) {
        messages.shift();
      }
      messages.push(message);

      wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(message);
        }
      });
    });

    ws.on("close", () => {
      // 필요시 작성
    });
  });
}

module.exports = { setupWebSocket };
