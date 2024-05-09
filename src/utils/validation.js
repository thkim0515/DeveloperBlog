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
    return "영문 대소문자, 숫자, 특수문로 구성된 8글자 이상이여야 합니다";
};

// 비밀번호 일치 확인
export const rePassword = (password, rePassword) => {
  if (password !== rePassword) {
    return "아이디 또는 비밀번호가 일치하지 않습니다.";
  }
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
