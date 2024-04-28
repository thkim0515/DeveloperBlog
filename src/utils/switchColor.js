export const switchColor = (lang) => {
  let bgColor;
  switch (lang) {
    case "react":
      bgColor = "#007ACC";
      break;
    case "javascript":
      bgColor = "#F0DB4F";
      break;
    case "java":
      bgColor = "#5382A1";
      break;
    case "html":
      bgColor = "#E34C26";
      break;
    case "css":
      bgColor = "#264DE4";
      break;
    case "spring":
      bgColor = "#2DFA0C";
      break;
    case "vue":
      bgColor = "#6CD252";
      break;
    case "typescript":
      bgColor = "#3561FD";
      break;
    case "unknown":
      bgColor = "grey";
      break;
    default:
      bgColor = "#3F72AF";
      break;
  }
  return bgColor;
};