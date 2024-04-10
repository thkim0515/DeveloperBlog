import { useState } from "react";
import * as S from "./AccountModal.style";

// components
import { FindAccount } from "./FindAccount";

export const ResetAccountModal = ({ onClick }) => {
  const [activeTab, setActiveTab] = useState("findId");

  return (
    <S.ModalBackgroundBox>
      <S.ModalBox>
        <S.TabMenuBox>
          <S.TabMenu>
            <S.Tab onClick={() => setActiveTab("findId")}>아이디 찾기</S.Tab>
            <S.Tab>비밀번호 찾기</S.Tab>
          </S.TabMenu>
          <S.TabMenuBar>
            <div className="inner-bar"></div>
          </S.TabMenuBar>
        </S.TabMenuBox>

        {/* 닫기 버튼 */}
        <S.ModalCloseButton onClick={onClick}>x</S.ModalCloseButton>

        {/* 찾기에 따른 컴포넌트 변화 영역 */}
        {activeTab === "findId" && <FindAccount />}
      </S.ModalBox>
    </S.ModalBackgroundBox>
  );
};
