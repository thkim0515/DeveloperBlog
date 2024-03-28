import { useState } from "react";
import useOpenai from "../hook/useOpenAi";

export const Refact = () => {
  const [code, setCode] = useState("");
  const { commentedCode, error, annotateCode } = useOpenai();

  const handleCordAnnotation = async (event) => {
    event.preventDefault();
    await annotateCode(code);
  };

  const handleGetUserCord = (event) => {
    setCode(event.target.value);
  };

  return (
    <div>
      <h1>코드 주석달기</h1>
      <form onSubmit={handleCordAnnotation}>
        <textarea value={code} onChange={handleGetUserCord} />
        <button type="submit">변환하기</button>
      </form>
      {error && <p>{error}</p>}
      {commentedCode && <p>{commentedCode}</p>}
    </div>
  );
};
