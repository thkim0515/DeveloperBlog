import { useState } from "react";
import * as S from "./AccountModal.style";

// components
import { FindAccount } from "./FindAccount";

export const AccountModal = ({ onClick }) => {
  const [isActiveTab, setIsActiveTab] = useState("findId");

  const handleBackgroundClick = (e) => {
    e.stopPropagation();
  };

  // 활성 탭 변경
  const handleTabClick = (tab) => {
    setIsActiveTab(tab);
  };

  return (
    <S.ModalBackgroundBox onClick={onClick}>
      <S.ModalBox onClick={handleBackgroundClick}>
        <div>
          <S.TabMenu>
            <S.Tab
              onClick={() => handleTabClick("findId")}
              active={isActiveTab === "findId"}
            >
              아이디 찾기
            </S.Tab>
            <S.Tab
              onClick={() => handleTabClick("findPassword")}
              active={isActiveTab === "findPassword"}
            >
              비밀번호 찾기
            </S.Tab>
          </S.TabMenu>
          <S.TabMenuBar>
            <S.InnerBar active={isActiveTab} />
          </S.TabMenuBar>
        </div>

        {/* 닫기 버튼 */}
        <S.ModalCloseButton onClick={onClick}>x</S.ModalCloseButton>
        <FindAccount active={isActiveTab} />
      </S.ModalBox>
    </S.ModalBackgroundBox>
  );
};
