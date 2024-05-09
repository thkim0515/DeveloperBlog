export const connectWebSocket = (url) => ({
  type: "WEBSOCKET_CONNECT",
  payload: { url },
});

export const disconnectWebSocket = () => ({
  type: "WEBSOCKET_DISCONNECT",
});

export const messageReceived = (message) => ({
  type: "MESSAGE_RECEIVED",
  payload: message,
});

export const sendMessage = (message) => ({
  type: "SEND_MESSAGE",
  payload: message,
});
