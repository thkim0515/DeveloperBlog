// 이메일 형식인지 확인 (true 혹은 false 반환)
export const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

// 비밀번호 검증
export const validatePassword = (password) => {
  const PASSWORD_REG = /^[a-zA-Z0-9]+$/;

  if (!PASSWORD_REG.test(password))
    return '영문 대소문자, 숫자, 특수문로 구성된 8글자 이상이여야 합니다';
};

// 비밀번호 일치 확인
export const rePassword = (password, rePassword) => {
  if (password !== rePassword) {
    return '아이디 또는 비밀번호가 일치하지 않습니다.';
  }
};
