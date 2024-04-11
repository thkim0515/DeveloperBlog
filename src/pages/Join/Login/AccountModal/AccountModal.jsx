import { useState } from "react";
import * as S from "./AccountModal.style";

// components
import { FindAccount } from "./FindAccount";

export const AccountModal = ({ onClick }) => {
  const [isActiveTab, setIsActiveTab] = useState("findId");

  const handleBackgroundClick = (e) => {
    // 클릭 이벤트 전파 방지
    e.stopPropagation();
  };

  // 활성 탭을 변경
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

        {/* 찾기에 따른 컴포넌트 변화 영역 */}
        <FindAccount active={isActiveTab} />
      </S.ModalBox>
    </S.ModalBackgroundBox>
  );
};
