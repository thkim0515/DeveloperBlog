import axios from "axios";
import { decryptData } from "../utils/secure";

//글 작성 함수
export const handlePostCode = async (
  commentedCode,
  title,
  category,
  textData,
  navigate
) => {
  if (!commentedCode) {
    alert("코드변환을 진행해 주세요.");
    return;
  }

  const user = await decryptData("user", sessionStorage);
  const nickname = user.nickname;
  const profileImg = user.profileimg;
  const userId = user.id;

  const codeData = {
    userId: userId,
    title: title ? title : "제목없음",
    nickname: nickname,
    profileImg: profileImg,
    language: category ? category : "unknown",
    publicPrivate: true,
    imagePath: "img/Image0.jpg",
    ace_contents: commentedCode,
    toast_contents: textData,
  };

  await postCodeToServer(codeData, navigate);
};

const postCodeToServer = async (codeData, navigate) => {
  try {
    const response = await axios.post("/contents/create", codeData);
    alert("글 등록 성공!");
    const userSession = await decryptData("user", sessionStorage);
    const content = response.data.info;
    content.userId = userSession;

    navigate(`/post/${content._id}`, { state: { content } });
  } catch (error) {
    console.error("에러:", error);
    alert("글 등록 실패. 서버 에러.");
  }
};

//글 수정 함수
export const handleUpdateCode = async (
  postData,
  title,
  category,
  commentedCode,
  textData,
  navigate
) => {
  const content = {
    ...postData,
    title: title ? title : "제목없음",
    language: category ? category : "unknown",
    ace_contents: commentedCode ? commentedCode : postData.ace_contents,
    toast_contents: textData,
  };

  await updateContents(postData._id, content, navigate);
};

const updateContents = async (_id, content, navigate) => {
  try {
    await axios.put(`/contents/update/${_id}`, content);
    alert("성공적으로 수정");
    navigate(`/post/${_id}`, { state: { content } });
  } catch (error) {
    console.error("에러:", error);
    alert("수정 실패");
  }
};
