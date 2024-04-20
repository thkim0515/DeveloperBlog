import { useState } from "react";
import axios from "axios";

const useOpenai = () => {
  const [commentedCode, setCommentedCode] = useState("");
  const [error, setError] = useState(null);

  // ref . https://tilnote.io/pages/655203b7212492cbddf939fa
  const annotateCode = async (code) => {
    try {
      const response = await axios.post("/contents/annotate", {
        code,
      });
      setCommentedCode(response.data.commentedCode);
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
