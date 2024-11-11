// 아이디 형식 확인
export const validateId = (id) => {
  return String(id).match(/^[가-힣a-zA-Z0-9]{6,14}$/) !== null;
};

// 닉네임 형식 확인
export const validateNickname = (nickname) => {
  return String(nickname).match(/^[가-힣a-zA-Z0-9]{2,14}$/) !== null;
};

// 이메일 형식 확인
export const validateEmail = (email) => {
  return (
    String(email).match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ) !== null
  );
};

// 비밀번호 형식 확인
export const validatePassword = (password) => {
  return (
    String(password).match(
      /^[\wㄱ-힣!@#$%^&*()\-_=+\[\]{};:'",<.>/?]{8,16}$/
    ) !== null
  );
};

// 비밀번호 일치 확인
export const validateRePassword = (password, rePassword) => {
  return password === rePassword;
};

// 회원가입 양식 입력 유효성 검사 및 오류를 포함하는 객체 반환
export const validateSignUp = (id, nickname, password, rePassword) => {
  const errors = {};

  if (!validateId(id))
    errors.id = "아이디는 6글자 이상 14글자 이하여야 합니다.";
  if (!validateNickname(nickname))
    errors.nickname = "닉네임은 2글자 이상 14글자 이하여야 합니다.";
  if (!validatePassword(password))
    errors.password = "비밀번호는 8자 이상 16자리 이하여야 합니다.";
  if (!validateRePassword(password, rePassword))
    errors.rePassword = "비밀번호가 일치하지 않습니다.";

  return errors;
};

export const validateProjectForm = (fields) => {
  const errors = {};

  // 제목 필드 유효성 검사
  if (!fields.title.trim()) {
    errors.title = "프로젝트 제목을 입력하세요.";
  }

  // 시작 및 종료 날짜 유효성 검사
  if (!fields.startDate.trim()) {
    errors.startDate = "시작 날짜를 선택하세요.";
  }
  if (!fields.endDate.trim()) {
    errors.endDate = "종료 날짜를 선택하세요.";
  } else {
    const startDate = new Date(fields.startDate);
    const endDate = new Date(fields.endDate);
    if (startDate > endDate) {
      errors.endDate = "종료 날짜는 시작 날짜보다 뒤에 있어야 합니다.";
    }
  }

  // 모집인원 유효성 검사
  if (fields.recruitmentCompleted > fields.tableOfOrganization) {
    errors.recruitment = "모집인원은 기존인원수 보다 커야합니다.";
  }

  // content 유효성 검사
  if (!fields.content.trim()) {
    errors.content = "내용을 입력하세요.";
  }

  return errors;
};
