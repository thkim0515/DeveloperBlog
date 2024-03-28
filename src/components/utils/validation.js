export const validatePassword = (password) => {
  const passwordReg = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
  const spaceReg = /\s/g;

  // 1. 공백 검사
  if (spaceReg.test(password)) {
    return '공백을 제거해주세요';
  } else if (!passwordReg.test(password)) {
    // 2.비밀번호 양식 검사
    return '영문, 숫자, 특수문자 혼합하여 8~25자';
  } else {
    // 3. 검사 통과
    return '올바른 비밀번호 양식입니다.';
  }
};

export const checkPassword = (password, rePassword) => {
  if (password !== rePassword) {
    return '비밀번호가 일치하지 않습니다.';
  } else {
    return '비밀번호가 일치합니다.';
  }
};
