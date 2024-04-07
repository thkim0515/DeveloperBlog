import { useState } from 'react';
import * as S from './AccountModal.style';

// components
import { FindId } from './FindId';
import { FindIdResult } from './FindIdResult';
// import { FindPassword } from './FindPassword';
// import { ResetPassword } from './ResetPassword';

export const ResetAccountModal = ({ onClick }) => {
  const [isFindId, setIsFindId] = useState(false);

  return (
    <S.ModalBackground>
      <S.AccountBox>
        <S.TabMenuBox>
          <S.TabMenu>
            <S.FindId>아이디 찾기</S.FindId>
            <S.FindPassword>비밀번호 찾기</S.FindPassword>
          </S.TabMenu>
          <S.TabMenuBar>
            <div className="inner-bar"></div>
          </S.TabMenuBar>
        </S.TabMenuBox>

        {/* 닫기 버튼 */}
        <S.ModalCloseButton onClick={onClick}>x</S.ModalCloseButton>

        {/* 찾기에 따른 컴포넌트 변화 영역 */}
        <FindId />
        {isFindId && <FindIdResult />}
      </S.AccountBox>
    </S.ModalBackground>
  );
};
