import { useState } from "react";
import * as S from "./AccountModal.style";

// components
import { FindAccount } from "./FindAccount";

export const AccountModal = ({ onClick }) => {
  const [isSelected, setIsSelected] = useState("findId");

  const handleModalBoxClick = (e) => {
    // 클릭 이벤트 전파 방지
    e.stopPropagation();
  };

  return (
    <S.ModalBackgroundBox onClick={onClick}>
      <S.ModalBox onClick={handleModalBoxClick}>
        <S.TabMenuBox>
          <S.TabMenu>
            <S.Tab onClick={() => setIsSelected("findId")}>아이디 찾기</S.Tab>
            <S.Tab onClick={() => setIsSelected("findPassword")}>
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
        {isSelected && <FindAccount active={isSelected} />}
      </S.ModalBox>
    </S.ModalBackgroundBox>
  );
};
