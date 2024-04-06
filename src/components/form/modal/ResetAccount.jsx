import { styled } from 'styled-components';

// components
import { Input } from '../Input';

export const ResetAccount = ({ onClick }) => {
  return (
    <ModalBackground>
      <ResetAccountBox>
        <ResetTabMenuBox>
          <ResetTabMenu>
            <ResetId>아이디 찾기</ResetId>
            <ResetPassword>비밀번호 찾기</ResetPassword>
          </ResetTabMenu>

          <ResetTabMenuBar>
            <div className="inner-bar"></div>
          </ResetTabMenuBar>
        </ResetTabMenuBox>

        {/* 닫기 버튼 */}
        <ModalCloseButton onClick={onClick}>x</ModalCloseButton>

        {/* 찾기 컴포넌트 */}
        <form>
          <FormField>
            <label htmlFor="email">이메일</label>
            <Input type="email" id="email" />
          </FormField>
          <FormField>
            <label htmlFor="password">비밀번호</label>
            <Input type="password" id="password" />
          </FormField>
          <Button>아이디 찾기</Button>
        </form>
      </ResetAccountBox>
    </ModalBackground>
  );
};

const ModalBackground = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000000;
`;

const ResetAccountBox = styled.div`
  position: relative;
  padding: 4.5rem;
  background-color: #ffffff;
  border-radius: 8px;
`;

const ResetTabMenuBox = styled.div``;

const ResetTabMenu = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const ResetId = styled.button`
  color: blue;
`;

const ResetPassword = styled.button``;

const ModalCloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 30px;
`;

const ResetTabMenuBar = styled.div`
  width: 100%;
  height: 8px;
  background-color: #d9d9d9;
  margin: 1rem 0;

  .inner-bar {
    width: 50%;
    height: 8px;
    background-color: #dbe2ef;
  }
`;

const FormField = styled.div`
  label {
    display: block;
    padding: 0.7rem 0;
  }

  input[type='id'],
  input[type='email'],
  input[type='password'] {
    padding: 0.3rem;
    border: 1px solid #000000;
    resize: vertical;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 0.8rem;
  margin-top: 1rem;
  color: #ffffff;
  background-color: #3f72af;
`;
