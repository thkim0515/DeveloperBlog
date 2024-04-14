/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
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
import { LikeButton } from "./LikeButton";

export const PostDetailComp = () => {
  //로그인 유저 정보 가져오기
  const { user } = useUserLogin();
  const userId = user && user.id ? user.id : null;
  // ImageItem 클릭시 state값 전달
  const location = useLocation();
  const { content } = location.state;
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    axios
      .post("/contents/view", { _id: content._id })
      //.then((response) => console.log(response.data))
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
      {content.imagePath && (
        <S.SContainer>
          <S.STitle>
            <div className="img_box">
              <img src={`../svg/${content.language}.svg`} alt="" />{" "}
              {/* alt={image.language} */}
            </div>
            <h3>{content.title}</h3>
            {user && userId === content.userId && (
              <PostDetailWriter content={content} />
            )}
          </S.STitle>
          <S.SSpace>
            <div style={{ display: "flex", alignItems: "center" }}>
              <S.SProfileImage title="프로필">
                {content.userDetails.profileimg && (
                  <S.ProfileImage
                    src={`../${content.imagePath}`}
                    alt={content.userDetails.profileimg}
                  />
                )}
              </S.SProfileImage>
              {content.userDetails.nickname}
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
            <div
              className="text_area"
              dangerouslySetInnerHTML={{ __html: content.toast_contents }}
            />
            <button onClick={handleGoBack}>뒤로가기</button>
            <LikeButton content_id={content._id} user_id={userId} />
          </S.SImageContent>
          <PostDetailComment content={content} />
        </S.SContainer>
      )}
    </>
  );
};
