export const connectWebSocket = (setMessages, userNickname, addr) => {
  const WEBSOCKET_ADDRESS = addr.addr;
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

  ws.onclose = function (event) {
    console.log("WebSocket 연결 종료");
    console.log("종료 코드:", event.code, "이유:", event.reason);
  };

  ws.onerror = function (event) {
    console.error("WebSocket 오류 발생:", event);
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
