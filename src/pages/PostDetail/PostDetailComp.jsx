/* eslint-disable react-hooks/exhaustive-deps */
// Toast-UI Viewer 임포트
import "@toast-ui/editor/dist/toastui-editor-viewer.css";
import { Viewer } from "@toast-ui/react-editor";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as S from "./PostDetailComp.style";
import { PostDetailWriter } from "./PostDetailWriter";
import { Comment } from "../../components/Comment/Comment";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-one_dark";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/theme-kuroir";
import axios from "axios";
import { useUserLogin } from "../../context/UserLoginContext";
import { useScrollReset } from "../../hooks/useScrollReset";
import { LikeButton } from "../../components/imagegallery/ImageGalleryComponents/LikeButton";
import { Metas } from "../../components/common/Metas";
import { useSelector } from "react-redux";

export const PostDetailComp = () => {
  const bucketUrl = useSelector((state) => state.butketUrl.bucketUrl);
  //스크롤위치 초기화
  useScrollReset();

  //로그인 유저 정보 가져오기
  const { user } = useUserLogin();
  const userId = user && user.id ? user.id : null;

  // ImageItem 클릭시 state값 전달
  const location = useLocation();
  const { content } = location.state;
  const [detailContent, setDetailContent] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`/contents/read/${content._id}`);
        setDetailContent(response.data);
      } catch (e) {
        return;
        //console.log(e);
      }
    };

    getData();
  }, []);

  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    axios
      .post("/contents/view", { _id: content._id })
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
      <Metas title={detailContent.title} />
      {detailContent.imagePath && (
        <S.SContainer>
          <S.STitle>
            <div className="img_box">
              <img
                src={`
                    ${bucketUrl}svgs/${detailContent.language}.svg`}
                alt=""
              />{" "}
              {/* alt={image.language} */}
            </div>
            <h2>{detailContent.title}</h2>
            {user &&
              (userId === detailContent.userId._id ||
                userId === detailContent.userId.id) && (
                <PostDetailWriter content={detailContent} />
              )}
          </S.STitle>
          <S.SSpace>
            <div style={{ display: "flex", alignItems: "center" }}>
              <S.SProfileImage title="프로필">
                {detailContent.userId.profileimg && (
                  <S.ProfileImage
                    src={`${bucketUrl}profileImg/${detailContent.userId.profileimg}`}
                    alt={`${bucketUrl}profileImg/${detailContent.userId.profileimg}`}
                  />
                )}
              </S.SProfileImage>
              {detailContent.userId.nickname}
            </div>
            <div>{timeString(detailContent.postdate)}</div>
          </S.SSpace>

          <S.CodeContentBox>
            <h3>Code</h3>
            <div className="content_box">
              <AceEditor
                mode="javascript"
                theme="twilight"
                name="setCode"
                editorProps={{ $blockScrolling: true }}
                setOptions={{ useWorker: false }}
                value={detailContent.ace_contents}
                readOnly={true}
                wrapEnabled={true}
                width="95%"
                fontSize="1rem"
              />
            </div>
            <h3>Text</h3>
            <div className="content_box">
              <div className="text_area">
                <Viewer initialValue={detailContent.toast_contents} />
              </div>
            </div>
          </S.CodeContentBox>
          <S.SLikeBackButton>
            <LikeButton
              content_id={detailContent._id}
              user_id={userId}
              boardSortation="contents"
            />
            <button onClick={handleGoBack}>뒤로가기</button>
          </S.SLikeBackButton>
          <Comment content={detailContent} />
        </S.SContainer>
      )}
    </>
  );
};
