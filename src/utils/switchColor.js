export const switchColor = (lang) => {
  let bgColor;
  switch (lang) {
    case "react":
      bgColor = "#007ACC";
      break;
    case "javascript":
      bgColor = "#F0DB4F";
      break;
    case "js":
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
    case "unknown":
      bgColor = "grey";
      break;
    default:
      bgColor = "#3F72AF";
      break;
  }
  return bgColor;
};