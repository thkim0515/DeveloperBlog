import { useState } from "react";
import axios from "axios";

const useOpenai = () => {
  const [commentedCode, setCommentedCode] = useState("");
  const [error, setError] = useState(null);

  // ref . https://tilnote.io/pages/655203b7212492cbddf939fa
  const annotateCode = async (code) => {
    try {
      const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY;
      const orderToGPT = process.env.REACT_APP_OPENAI_orderBlock;
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content: orderToGPT,
            },
            { role: "user", content: code },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${OPENAI_API_KEY}`,
          },
        }
      );

      const lastMessage = response.data.choices[0].message;
      const lastMessageContent = lastMessage
        ? lastMessage.content.trim()
        : "반환 텍스트가 없음";

      const replaceAllBackticks = lastMessageContent.replaceAll("```", "");
      setCommentedCode(replaceAllBackticks);
    } catch (error) {
      console.error(
        "OpenAI 에러",
        error.response ? error.response.data : error.message
      );
      setError("서버 에러");
    }
  };

  return { commentedCode, error, annotateCode };
};

export default useOpenai;
