<<<<<<< HEAD
=======
<<<<<<< HEAD
export const validatePassword = (password) => {
  const passwordReg = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
  const spaceReg = /\s/g;

  if (spaceReg.test(password)) {
    return "공백을 제거해주세요";
  } else if (!passwordReg.test(password)) {
    return "영문, 숫자, 특수문자 혼합하여 8~25자";
  } else {
    return "올바른 비밀번호 양식입니다.";
  }
};

export const checkPassword = (password, rePassword) => {
  if (password !== rePassword) {
    return "비밀번호가 일치하지 않습니다.";
  } else {
    return "비밀번호가 일치합니다.";
=======
>>>>>>> c0587e1884edf5ef7424143189684493a3ff6fcb
// 이메일 형식인지 확인 (true 혹은 false 반환)
export const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

// 비밀번호 형식인지 확인
export const validatePassword = (password) => {
  const passwordReg = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;

  if (!passwordReg.test(password))
    return '영문, 숫자, 특수문자 혼합하여 8~25자로 입력';
};

// 비밀번호가 일치하는지 확인
export const checkPassword = (password, retryPassword) => {
  if (password !== retryPassword) {
    return '비밀번호가 일치하지 않습니다.';
  } else {
    return '비밀번호가 일치합니다.';
<<<<<<< HEAD
=======
>>>>>>> serverDB
>>>>>>> c0587e1884edf5ef7424143189684493a3ff6fcb
  }
};
