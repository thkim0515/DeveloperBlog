import styled from "styled-components";
import { useState, useEffect } from "react";
import { Modal } from "./Modal";
import { LiveChat } from "../../components/LiveChat/LiveChat";
import { decryptData } from "../../utils/secure";

// 리덕스 적용
import { useSelector, useDispatch } from "react-redux";
import { reset, increment } from "../../_slice/unreadMessagesSlice";

const ChatAndWriteBox = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`;

const LiveChatButton = styled.button`
  width: 120px;
  height: 40px;
  padding: 10px;
  background-color: #3f72af;
  color: #fff;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  position: relative;
`;

const Notification = styled.div`
  position: absolute;
  top: -5px;
  right: -5px;
  width: 20px;
  height: 20px;
  background-color: red;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  // background-image: url("https://starblog-bucket.s3.ap-northeast-2.amazonaws.com/starblogimg/bell.png");
  // background-size: cover;
`;

const develop = 1;

export const LiveChatComp = () => {
  const [isLiveChatVisible, setIsLiveChatVisible] = useState(false);
  const WEBSOCKET_ADDRESS =
    develop === 1
      ? "wss://d3kcrktwedekfj.cloudfront.net"
      : "ws://localhost:5000";

  const unreadMessages = useSelector((state) => state.unreadMessages.value);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleReset = () => {
    dispatch(reset());
  };

  const toggleLiveChat = () => {
    setIsLiveChatVisible(!isLiveChatVisible);
    if (isLiveChatVisible) {
      handleReset();
    }
  };

  useEffect(() => {
    if (isLiveChatVisible) {
      handleReset();
    }
  }, [isLiveChatVisible, handleReset]);

  // const [timeStamp, setTimeStamp] = useState("");
  useEffect(() => {
    const init = async () => {
      const ws = new WebSocket(WEBSOCKET_ADDRESS);
      // const userSession = await decryptData("user", sessionStorage);
      // const timestamp = sessionStorage.getItem("timestamp");

      const randomSuffix =
        "비로그인유저" + sessionStorage.getItem("randomSuffix");
      ws.onmessage = async (event) => {
        if (event.data instanceof Blob) {
          const text = await event.data.text();

          try {
            const data = JSON.parse(text);
            if (data.userId !== randomSuffix) {
              // if (data.timestamp > timeStamp) {
              handleIncrement();
              // }
              // if (
              //   data.userId !== randomSuffix &&
              //   (!userSession || data.userId !== userSession.nickname)
              // ) {
              // handleIncrement();
            }
          } catch (error) {
            console.error("JSON 파싱 에러:", error);
          }
        } else {
          try {
            const data = JSON.parse(event.data);
            if (data.userId !== randomSuffix) {
              // if (data.timestamp > timeStamp) {
              handleIncrement();
              // }
            }
          } catch (error) {
            console.error("JSON 파싱 에러:", error);
          }
        }
      };

      return () => ws.close();
    };
    init();
  }, []); //[timestamp]):

  // useEffect(() => {
  //   const updateTimestamp = () => {
  //     const storedTimestamp = sessionStorage.getItem("timestamp");
  //     setTimeStamp(storedTimestamp || "");
  //   };

  //   updateTimestamp();
  //   const intervalId = setInterval(updateTimestamp, 1000);

  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // }, []);
  return (
    <div>
      <ChatAndWriteBox>
        <LiveChatButton onClick={toggleLiveChat}>
          실시간 채팅
          {unreadMessages > 0 && <Notification>{unreadMessages}</Notification>}
        </LiveChatButton>
      </ChatAndWriteBox>
      {isLiveChatVisible && (
        <Modal onClose={toggleLiveChat}>
          <LiveChat addr={WEBSOCKET_ADDRESS} />
        </Modal>
      )}
    </div>
  );
};
