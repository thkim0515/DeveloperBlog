import { useState } from "react";
import * as S from "./Account.style";
import { CloseButton } from "react-bootstrap";

// components
import { FindAccount } from "./FindAccount";

const TABS = {
  FIND_ID: "findId",
  FIND_PASSWORD: "findPassword",
};

export const Account = ({ onClick }) => {
  const [activeTab, setActiveTab] = useState(TABS.FIND_ID);

  const preventCapturing = e => {
    e.stopPropagation();
  };

  // 활성 탭 변경
  const handleClickTab = tab => {
    setActiveTab(tab);
  };

  return (
    <S.ModalBackgroundBox onClick={onClick}>
      <S.ModalBox onClick={preventCapturing}>
        <div>
          <S.TabMenu>
            <S.Tab onClick={() => handleClickTab(TABS.FIND_ID)} $active={activeTab === TABS.FIND_ID}>
              아이디 찾기
            </S.Tab>
            <S.Tab onClick={() => handleClickTab(TABS.FIND_PASSWORD)} $active={activeTab === TABS.FIND_PASSWORD}>
              비밀번호 찾기
            </S.Tab>
          </S.TabMenu>
          <S.TabMenuBar>
            <S.InnerBar $active={activeTab === TABS.FIND_ID ? 0 : "50%"} />
          </S.TabMenuBar>
        </div>

        {/* 닫기 버튼 */}
        <S.ModalCloseButton onClick={onClick}>
          <CloseButton />
        </S.ModalCloseButton>
        <FindAccount $active={activeTab} />
      </S.ModalBox>
    </S.ModalBackgroundBox>
  );
};
