const WebSocket = require("ws");

let messages = [];

function setupWebSocket(server) {
  const wss = new WebSocket.Server({ server });

  wss.on("connection", (ws) => {
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
      // 필요시 작성
    });
  });
}

module.exports = { setupWebSocket };
