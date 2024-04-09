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

export const PostDetailComp = () => {
  //로그인 유저 정보 가져오기
  const { user } = useUserLogin();

  // ImageItem 클릭시 state값 전달
  const location = useLocation();
  const { image } = location.state;
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

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
            <div
              className="text_area"
              dangerouslySetInnerHTML={{ __html: image.toast_contents }}
            />
            <button onClick={handleGoBack}>뒤로가기</button>
          </S.SImageContent>
          <PostDetailComment image={image} />
        </S.SContainer>
      )}
    </>
  );
};
