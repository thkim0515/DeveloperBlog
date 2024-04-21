import { useState } from "react";
import styled from "styled-components";
import { CodePost } from "./CodePost";
import { Input } from "./../../components/LiveChat.style";

export const NewCodePosting = () => {
  const [selectView, setSelectView] = useState("");

  const toggleViews = (e) => {
    setSelectView(e.target.name);
  };

  return (
    <>
      <CodePostingBox>
        <TitleBox>
          <Input type="text" id="title" placeholder="제목을 입력하세요" />
        </TitleBox>
        <ViewOptionsBox>
          <button name="getAce-clear">입력창 비우기</button>
          <button name="getAce" onClick={toggleViews}>
            입력창 보기
          </button>
          <button name="setAce" onClick={toggleViews}>
            결과창 보기
          </button>
          <button name="setToast" onClick={toggleViews}>
            텍스트창 보기
          </button>
        </ViewOptionsBox>
        <CodePost />
        <PostButtonBox>
          <button>코드 변환</button>
          <button>포스팅 올리기</button>
        </PostButtonBox>
      </CodePostingBox>
    </>
  );
};

const CodePostingBox = styled.div`
  background-color: white;
  padding: 0.5rem;
`;

const TitleBox = styled.div`
  background-color: white;

  input {
    margin: 0;
  }
`;

const ViewOptionsBox = styled.div`
  text-align: center;

  button {
    display: inline-block;
    background-color: #b3b0b0;
    padding: 0.25rem;
    margin: 8px;
    border-radius: 4px;
  }
`;

const PostButtonBox = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    background-color: #b3b0b0;
    padding: 0.25rem;
    margin-top: 8px;
    border-radius: 4px;
  }
`;
