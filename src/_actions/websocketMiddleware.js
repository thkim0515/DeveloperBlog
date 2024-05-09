const createWebSocketMiddleware = () => {
  let socket = null;

  const onOpen = (ws, store, token) => (evt) => {
    console.log("WebSocket 연결");
  };

  const onClose = (ws, store) => (evt) => {
    console.log("WebSocket 연결해제");
  };

  const onMessage = (ws, store) => (evt) => {
    const msg = JSON.parse(evt.data);
    store.dispatch({
      type: "MESSAGE_RECEIVED",
      payload: msg,
    });
  };

  return (store) => (next) => (action) => {
    switch (action.type) {
      case "WEBSOCKET_CONNECT":
        if (socket !== null) {
          socket.close();
        }
        socket = new WebSocket(action.payload.url);
        socket.onmessage = onMessage(socket, store);
        socket.onclose = onClose(socket, store);
        socket.onopen = onOpen(socket, store);
        break;
      case "WEBSOCKET_DISCONNECT":
        if (socket !== null) {
          socket.close();
        }
        socket = null;
        break;
      case "SEND_MESSAGE":
        if (socket !== null && socket.readyState === WebSocket.OPEN) {
          socket.send(JSON.stringify(action.payload));
        }
        break;
      default:
        return next(action);
    }
  };
};

export default createWebSocketMiddleware;
