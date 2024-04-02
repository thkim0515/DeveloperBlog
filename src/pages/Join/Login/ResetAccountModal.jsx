import React from 'react';
import { styled } from 'styled-components';
import { FormField } from '../../../components/form/FormField';

export const ResetAccountModal = () => {
  return (
    <>
      <div>
        <div>
          <ModalTab>
            <span>아이디 찾기</span>
            <span>비밀번호 찾기</span>
          </ModalTab>
          <div className="progress-bar">
            <div className="inner-bar"></div>
          </div>
        </div>

        {/* 아이디 찾기 */}
        <form>
          <div>
            {/* 아이디 */}
            <FormField labelText="이메일" inputType="email" id="email" />

            {/* 비밀번호 */}
            <FormField
              labelText="비밀번호"
              inputType="password"
              id="password"
            />
            <button type="submit">아이디 찾기</button>
          </div>
        </form>

        {/* 비밀번호 찾기 */}
        {/* <form>
        <div>
          <div className="formfield">
            <label htmlFor=""></label>
            <input type="text" />
          </div>
          <div className="formfield">
            <label htmlFor=""></label>
            <input type="text" />
          </div>
          <div className="formfield">
            <label htmlFor=""></label>
            <input type="text" />
          </div>
          <button type="submit">비밀번호 찾기</button>
        </div>
      </form> */}
      </div>
    </>
  );
};

const ModalTab = styled.div`
  span {
    display: inline-block;
  }
`;
