export const filterByCategory = (category, data) => {
  const frontend = ["html", "css", "javascript", "typescript", "react", "redux", "vue", "next", "figma"];
  const backend = ["java", "python", "spring", "mysql", "mariadb", "node.js"];

  switch (category) {
    case "frontend":
      return data.filter(item => frontend.includes(item));
    case "backend":
      return data.filter(item => backend.includes(item));
    case "etc":
      return data.filter(item => !frontend.includes(item) && !backend.includes(item));
    case "all":
      return data;
    default:
      return [];
  }
};
