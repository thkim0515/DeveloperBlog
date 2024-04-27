/* eslint-disable react-hooks/exhaustive-deps */
// Toast-UI Viewer 임포트
import "@toast-ui/editor/dist/toastui-editor-viewer.css";
import { Viewer } from "@toast-ui/react-editor";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as S from "./PostDetailComp.style";
import { PostDetailWriter } from "./PostDetailWriter";
import { PostDetailComment } from "./PostDetailComment";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-one_dark";
import "ace-builds/src-noconflict/theme-twilight";
import axios from "axios";
import { useUserLogin } from "../../context/UserLoginContext";
import { useScrollReset } from "../../hooks/useScrollReset";
import { LikeButton } from "../imagegallery/ImageGalleryComponents/LikeButton";
import { Metas } from "../common/Metas";

export const PostDetailComp = () => {
  //스크롤위치 초기화
  useScrollReset();

  //로그인 유저 정보 가져오기
  const { user } = useUserLogin();
  const userId = user && user.id ? user.id : null;

  // ImageItem 클릭시 state값 전달
  const location = useLocation();
  const { content } = location.state;
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(0);
    setTimeout(() => {
      navigate(-1);
    }, 0);
  };

  useEffect(() => {
    axios
      .post("/contents/view", { _id: content._id })
      // .then((response) => setViews(response.data.views))
      .catch((error) => console.error("Error:", error));
  }, [content._id]);

  function timeString(postdate) {
    const match = postdate.match(/(\d{4}).(\d{2}).(\d{2})T(\d{2}):(\d{2})/);

    if (match) {
      const year = match[1].substr(-2);
      const month = match[2];
      const day = match[3];
      const hours = match[4];
      const minutes = match[5];

      return `${year}-${month}-${day} / ${hours}:${minutes}`;
    }
  }
  return (
    <>
      <Metas title={content.title} />
      {content.imagePath && (
        <S.SContainer>
          <S.STitle>
            <div className="img_box">
              <img src={`../svg/${content.language}.svg`} alt="" />{" "}
              {/* alt={image.language} */}
            </div>
            <h3>{content.title}</h3>
            {user &&
              (userId === content.userId._id ||
                userId === content.userId.id) && (
                <PostDetailWriter content={content} />
              )}
          </S.STitle>
          <S.SSpace>
            <div style={{ display: "flex", alignItems: "center" }}>
              <S.SProfileImage title="프로필">
                {content.userId.profileimg && (
                  <S.ProfileImage
                    src={`../${content.userId.profileimg}`}
                    alt={content.userId.profileimg}
                  />
                )}
              </S.SProfileImage>
              {content.userId.nickname}
            </div>
            <div>{timeString(content.postdate)}</div>
          </S.SSpace>
          <S.SImageContent>
            <AceEditor
              mode="javascript"
              theme="one_dark"
              name="setCord"
              editorProps={{ $blockScrolling: true }}
              setOptions={{ useWorker: false }}
              value={content.ace_contents}
              readOnly={true}
              wrapEnabled={true}
              width="100%"
              fontSize="1rem"
            />
            {/* <div
              className="text_area"
              dangerouslySetInnerHTML={{ __html: content.toast_contents }}
            /> */}
            <div className="text_area">
              <Viewer initialValue={content.toast_contents} />
            </div>
          </S.SImageContent>
          <S.SLikeBackButton>
            <LikeButton content_id={content._id} user_id={userId} />
            <button onClick={handleGoBack}>뒤로가기</button>
          </S.SLikeBackButton>
          <PostDetailComment content={content} />
        </S.SContainer>
      )}
    </>
  );
};
