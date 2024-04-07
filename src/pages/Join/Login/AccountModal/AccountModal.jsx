import { useState } from "react";
import * as S from "./AccountModal.style";

// TODO 컴포넌트 개선 필요
// components
import { FindId } from "./FindId";
// import { FindIdResult } from "./FindIdResult";
import { FindPassword } from "./FindPassword";
// import { ResetPassword } from './ResetPassword';

export const ResetAccountModal = ({ onClick }) => {
  const [activeTab, setActiveTab] = useState("findId");

  return (
    <S.ModalBackgroundBox>
      <S.ModalBox>
        <S.TabMenuBox>
          <S.TabMenu>
            <S.Tab onClick={() => setActiveTab("findId")}>아이디 찾기</S.Tab>
            <S.Tab onClick={() => setActiveTab("findPassword")}>
              비밀번호 찾기
            </S.Tab>
          </S.TabMenu>
          <S.TabMenuBar>
            <div className="inner-bar"></div>
          </S.TabMenuBar>
        </S.TabMenuBox>

        {/* 닫기 버튼 */}
        <S.ModalCloseButton onClick={onClick}>x</S.ModalCloseButton>

        {/* 찾기에 따른 컴포넌트 변화 영역 */}
        {activeTab === "findId" && <FindId />}
        {activeTab === "findPassword" && <FindPassword />}
      </S.ModalBox>
    </S.ModalBackgroundBox>
  );
};
