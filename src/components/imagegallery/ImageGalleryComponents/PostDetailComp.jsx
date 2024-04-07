import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as S from "./PostDetailComp.style";
import { PostDetailWriter } from "./PostDetailWriter";
import { PostDetailComment } from "./PostDetailComment";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-one_dark";
import "ace-builds/src-noconflict/theme-twilight";
import axios from "axios";
import { useUserLogin } from "../../../context/UserLoginContext";

// function SafeHTMLComponent({ htmlContent }) {
//   return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
// }

export const PostDetailComp = (stateCheck) => {
  const location = useLocation();
  const { image } = location.state;
  const [comment, setComment] = useState("");

  const { user } = useUserLogin();

  // const update = useNavigate();
  // const navigate = useNavigate();
  const history = useNavigate();

  const handleGoBack = () => {
    history(-1);
  };

  // const updateContents = (pid) => () => {
  //   update(`/postUpdate/${pid}`, { state: { pid } });
  // };

  // const deleteContents = async (pid) => {
  //   const isConfirmed = window.confirm("정말로 삭제하시겠습니까?");

  //   if (isConfirmed) {
  //     try {
  //       const response = await axios.delete(`/contents/delete/${pid}`);
  //       console.log("서버 응답:", response.data);
  //       navigate("/");
  //       window.location.reload();
  //     } catch (error) {
  //       console.error("에러:", error);
  //       alert("삭제 실패");
  //     }
  //   }
  // };
  function timeString(postdate) {
    const match = postdate.match(/(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})/);

    if (match) {
      const year = match[1].substr(-2);
      const month = match[2];
      const day = match[3];
      const hours = match[4];
      const minutes = match[5];

      return `${year}-${month}-${day} / ${hours}:${minutes}`;
    }
  }

  // function handleComment(event) {
  //   setComment(event.target.value);
  // }

  // const handlePostCode = async () => {
  //   const user = JSON.parse(sessionStorage.getItem("user"));
  //   const nickname = user.nickname;
  //   const postId = image.pid;

  //   const commentData = {
  //     postId: postId,
  //     nickname: nickname,
  //     comment: comment,
  //   };

  //   await postCommentToServer(commentData);
  // };

  // const postCommentToServer = async (commentData) => {
  //   try {
  //     const response = await axios.post("/comments/create", commentData);
  //     console.log("서버 응답:", response.data);
  //     alert("댓글 등록 성공!");
  //   } catch (error) {
  //     console.error("에러:", error);
  //     alert("댓글 등록 실패. 서버 에러.");
  //   }
  // };

  return (
    <>
      {image.imagePath && (
        <S.SContainer>
          <S.STitle>
            <div className="img_box">
              <img src={`../svg/${image.language}.svg`} alt="" />{" "}
              {/* alt={image.language} */}
            </div>
            <h3>{image.title}</h3>
            {user && user.nickname === image.nickname && (
              <PostDetailWriter image={image} />
            )}
          </S.STitle>
          <S.SSpace>
            <div style={{ display: "flex", alignItems: "center" }}>
              <S.SProfileImage title="프로필">
                {image.profileImg && (
                  <S.ProfileImage
                    src={`../${image.imagePath}`}
                    alt={image.profileImg}
                  />
                )}
              </S.SProfileImage>
              {image.nickname}
            </div>
            <div>{timeString(image.postdate)}</div>
          </S.SSpace>
          <S.SImageContent>
            <AceEditor
              mode="javascript"
              theme="one_dark"
              name="setCord"
              editorProps={{ $blockScrolling: true }}
              setOptions={{ useWorker: false }}
              value={image.ace_contents}
              readOnly={true}
              wrapEnabled={true}
              width="100%"
              fontSize="1rem"
            />
            {/* <img src={`../${image.imagePath}`} alt={image.title} /> */}
            {/* <p>{image.ace_contents}</p> */}
            <div
              className="text_area"
              dangerouslySetInnerHTML={{ __html: image.toast_contents }}
            />
            <button onClick={handleGoBack}>뒤로가기</button>
            {/* <button onClick={updateContents(image.pid)}>수정</button>
            <button onClick={() => deleteContents(image.pid)}>삭제</button> */}
          </S.SImageContent>
          <PostDetailComment image={image} />
          {/* <div>
            <div className="input-group">
              <input
                type="text"
                id="comment"
                placeholder="댓글을 입력하세요."
                onChange={handleComment}
              />
            </div>
            <button onClick={handlePostCode}>등록하기</button>
          </div> */}

          {/* 
                {currentImages.map((img, idx) => (
        <ImageItem key={idx} image={img} />
                ))} */}
        </S.SContainer>
      )}
    </>
  );
};
