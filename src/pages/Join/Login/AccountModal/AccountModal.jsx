import { useState } from "react";
import * as S from "./AccountModal.style";
import { CloseButton } from "react-bootstrap";

// components
import { FindAccount } from "./FindAccount";

export const AccountModal = ({ onClick }) => {
  const [isActivedTab, setIsActivedTab] = useState("findId");

  const handleBackgroundClick = (e) => {
    e.stopPropagation();
  };

  // 활성 탭 변경
  const handleTabClick = (tab) => {
    setIsActivedTab(tab);
  };

  return (
    <S.ModalBackgroundBox onClick={onClick}>
      <S.ModalBox onClick={handleBackgroundClick}>
        <div>
          <S.TabMenu>
            <S.Tab
              onClick={() => handleTabClick("findId")}
              $active={isActivedTab === "findId"}
            >
              아이디 찾기
            </S.Tab>
            <S.Tab
              onClick={() => handleTabClick("findPassword")}
              $active={isActivedTab === "findPassword"}
            >
              비밀번호 찾기
            </S.Tab>
          </S.TabMenu>
          <S.TabMenuBar>
            <S.InnerBar $active={isActivedTab} />
          </S.TabMenuBar>
        </div>

        {/* 닫기 버튼 */}
        <S.ModalCloseButton onClick={onClick}>
          <CloseButton />
        </S.ModalCloseButton>
        <FindAccount $active={isActivedTab} />
      </S.ModalBox>
    </S.ModalBackgroundBox>
  );
};
