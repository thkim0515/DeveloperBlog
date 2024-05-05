export const translateRoleToKr = (role) => {
  switch (role) {
    case "projectManager":
      return "기획자";
    case "designer":
      return "디자이너";
    case "frontEnd":
      return "프론트엔드";
    case "backEnd":
      return "백엔드";
    case "undecided":
      return "모집분야미정";
    default:
      return "";
  }
};
