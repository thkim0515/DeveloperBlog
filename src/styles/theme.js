const deviceSizes = {
  mobile: "375px",
  tablet: "768px",
  laptop: "1024px",
};

const device = {
  mobile: `screen and (max-width: ${deviceSizes.mobile})`,
  tablet: `screen and (max-width: ${deviceSizes.tablet})`,
  laptop: `screen and (max-width: ${deviceSizes.laptop})`,
};

// 공통 색상
const colors = {
  background: "#F9F7F7",
  color: "#112d4e",
  navy: "#3f72af",
  sky: "#dbe2ef",
  black: "#000000",
  white: "#ffffff",
};

// 프로그래밍 언어 색상
const programming = {
  js: "#F0DB4F",
  ts: "#007ACC",
  html: "#E34C26",
  css: "#264DE4",
  javaFirst: "#5382A1",
  javaSecond: "#F89820",
  pythonFirst: "#FFDE57",
  pythonSecond: "#4584B6",
};

// 프로젝트 역할 색상
const projectRole = {
  projectManager: "#D8D8D8",
  designer: "#69FEB6",
  frontEnd: "#86C1E9",
  backEnd: "#53CEEA",
};

export const theme = {
  device,
  colors,
  programming,
  projectRole,
};

// 참고: 디자인 시스템 코드로 구축하기
// https://medium.com/@tellingme/frontend-%EB%94%94%EC%9E%90%EC%9D%B8-%EC%8B%9C%EC%8A%A4%ED%85%9C-%EC%BD%94%EB%93%9C%EB%A1%9C-%EA%B5%AC%EC%B6%95%ED%95%98%EA%B8%B0-bc0a8319f137
