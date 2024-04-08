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

// function SafeHTMLComponent({ htmlContent }) {
//   return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
// }

export const PostDetailComp = () => {
  // ImageItem 클릭시 state값 전달
  const location = useLocation();
  const { image } = location.state;
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  // 업데이트 루틴 해당 게시글의 _id값을 postUpdate로 state값 전달

  // 댓글 수정 로직
  // isEdit 은 _id값을 저장하여 클릭한 코멘트 값만 변경할 수 있기위함
  // editComment 는 수정전의 내용을담는 용도로 먼저 사용 후, 수정된 내용을 전달하기 위함
  const [isEdit, setIsEdit] = useState(null);
  const [editComment, setEditComment] = useState("");

  const updateContents = (_id, checkValue, comment) => () => {
    if (checkValue === "contents") {
      navigate(`/postUpdate/${_id}`, { state: { _id } });
    } else {
      // _id값과 comment값을 저장
      setIsEdit(_id);
      setEditComment(comment);
      //TODO 서버 update api 작성 >> 엔드포인트 /contents/update/:_id
    }
  };

  // Delete 콘텐츠, 댓글 -------------------------------- 스타트 포인트

  // 버튼에서 checkValue 파라미터를 0 과 1로 나눠서 댓글인지 콘텐츠 자체삭제인지  구분
  // TODO 나중에 콘텐츠 삭제시 해당 _id값의 코멘트도 같이 삭제하는 로직 추가

  const deleteContents = async (_id, checkValue) => {
    const contentsOrComments = checkValue;
    const location =
      contentsOrComments === "contents" ? "contents" : "comments";
    // console.log("_id >   " + _id);
    // console.log("checkValue >   " + checkValue);
    // console.log("location >   " + location);

    const isConfirmed = window.confirm("정말로 삭제하시겠습니까?");

    if (isConfirmed) {
      try {
        const response = await axios.delete(`/${location}/delete/${_id}`);
        console.log("서버 응답:", response.data);

        if (location === "contents") {
          navigate("/");
          window.location.reload();
        }
      } catch (error) {
        console.error("에러:", error);
        alert("삭제 실패");
      }
    }
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
  // Create 댓글 -------------------------------- 스타트 포인트

  //
  const [createComment, setCreateComment] = useState([]);

  function handleComment(event) {
    setCreateComment(event.target.value);
  }

  const handlePostCode = async () => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    const nickname = user.nickname;
    const postId = image._id;

    const commentData = {
      postId: postId,
      nickname: nickname,
      comment: createComment,
    };

  //   await postCommentToServer(commentData);
  // };

  const postCommentToServer = async (commentData) => {
    try {
      const response = await axios.post("/comments/create", commentData);
      console.log("서버 응답:", response.data);
      alert("댓글 등록 성공!");
      setCreateComment("");
    } catch (error) {
      console.error("에러:", error);
      alert("댓글 등록 실패. 서버 에러.");
    }
  };
  // Create 댓글 -------------------------------- 엔드 포인트

  // Read 댓글 -------------------------------- 스타트 포인트

  // ↘ 콘텐츠 글의 _id 값을 참조 댓글에 저장한 콘텐츠의 _Id 값을 기준으로 조회

  const [readComments, setReadComments] = useState([]);

  const readCommentsFunc = async () => {
    try {
      const response = await axios.get(`/comments/read/${image._id}`);
      setReadComments(
        response.data.sort(
          (a, b) => new Date(b.postdate) - new Date(a.postdate)
        )
      );
    } catch (error) {
      console.error("댓글 불러오기 에러:", error);
    }
  };

  useEffect(() => {
    readCommentsFunc();
  }, []);

  // Read 댓글 -------------------------------- 엔드 포인트

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
            <button onClick={updateContents(image._id, "contents", null)}>
              수정
            </button>
            <button onClick={() => deleteContents(image._id, "contents")}>
              삭제
            </button>
          </S.SImageContent>

          <div className="input-group">
            <input
              type="text"
              id="comment"
              placeholder="댓글을 입력하세요."
              onChange={handleComment}
            />
          </div>
          <button onClick={handlePostCode}>등록하기</button>

          {readComments.map((comment) => (
            <div key={comment._id}>
              <div>
                <strong>{comment.nickname}</strong>
              </div>
              {/* isEdit과 comment._id 값이 일치하면 
              수정버튼을 누름과 동시에 input 박스로 변형 및 기존 comment를 삽입  207~214*/}
              {isEdit === comment._id ? (
                <input
                  value={editComment}
                  onChange={(e) => setEditComment(e.target.value)}
                />
              ) : (
                <div>: {comment.comment}</div>
              )}
              {timeString(comment.postdate)}
              <div>
                {/* isEdit === comment._id 값이 일치하면 수정(작성 및 저장하는 구문)
              일치하지 않으면 기존상태( 수정, 삭제) 수정버튼 누를 시 윗줄이 작동 */}
                {isEdit === comment._id ? (
                  <button
                    onClick={() => {
                      /* 업데이트 함수 구축예정 */
                    }}
                  >
                    저장
                  </button>
                ) : (
                  <>
                    <button
                      onClick={updateContents(
                        comment._id,
                        "comments",
                        comment.comment
                      )}
                    >
                      수정
                    </button>
                    <button
                      onClick={() => deleteContents(comment._id, "comments")}
                    >
                      삭제
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}
        </S.SContainer>
      )}
    </>
  );
};
