import axios from "axios";
import { decryptData } from "../js/secure";

//글 작성 함수
export const handlePostProject = async (...projectData) => {
  const user = await decryptData("user", sessionStorage);
  const nickname = user.nickname;
  const profileImg = user.profileimg;
  const userId = user.id;
  const spreadProjectData = projectData[0];

  const Data = {
    userId: userId,
    nickname: nickname,
    profileImg: profileImg,
    title: spreadProjectData.title ? spreadProjectData.title : "제목없음",
    startDate: spreadProjectData.startDate,
    endDate: spreadProjectData.endDate,
    updateDate: spreadProjectData.updateDate,
    hashTags: spreadProjectData.hashTags,
    stacks: spreadProjectData.stacks,
    roles: spreadProjectData.roles,
    content: spreadProjectData.content,
    memberList: spreadProjectData.recruitmentCompleted,
    tableOfOrganiztion: spreadProjectData.tableOfOrganiztion,
  };

  await postCodeToServer(Data);
};

const postCodeToServer = async (Data) => {
  try {
    const response = await axios.post("/project/create", Data);
    alert("글 등록 성공!");
    const userSession = await decryptData("user", sessionStorage);
    // const content = response.data.info;
    // content.userId = userSession;
  } catch (error) {
    console.error("에러:", error);
    alert("글 등록 실패. 서버 에러.");
  }
};
