export const connectWebSocket = (setMessages, userNickname) => {
  const WEBSOCKET_ADDRESS = "wss://d3kcrktwedekfj.cloudfront.net";
  // const WEBSOCKET_ADDRESS = "ws://localhost:5000";
  let ws = new WebSocket(WEBSOCKET_ADDRESS);

  ws.onopen = () => {
    setMessages([]);
  };
  ws.onmessage = async (event) => {
    if (event.data instanceof Blob) {
      // Blob 객체를 처리하는 로직
      const text = await event.data.text();
      try {
        const data = JSON.parse(text);
        const displayMessage = {
          userId: data.userId || userNickname,
          text: ` : ${data.message}`,
          timestamp: data.timestamp,
        };
        setMessages((prev) => [...prev, displayMessage]);
      } catch (error) {
        console.error("JSON 파싱 에러:", error);
      }
    }
  };
  ws.onclose = () => {
    console.log("WebSocket 연결 종료");
  };

  return ws; // WebSocket 객체 반환
};

export const sendMessage = (ws, message, userNickname, setInputText) => {
  if (ws && ws.readyState === WebSocket.OPEN) {
    const timestamp = new Date().toLocaleTimeString();
    ws.send(JSON.stringify({ userId: userNickname, message, timestamp }));
    setInputText("");
  }
};
