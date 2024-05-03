import { useState, useEffect, useRef } from "react";
import axios from "axios";
import * as S from "./PostDetailComp.style";
import { useNavigate } from "react-router-dom";
import { useUserLogin } from "../../context/UserLoginContext";

export const PostDetailComment = ({ content }) => {
  //로그인 유저 정보 가져오기
  const { user } = useUserLogin();

  const navigate = useNavigate();

  //댓글 작성 상태관리
  const [comment, setComment] = useState("");

  //댓글 작성, 수정 input값 변경 감지 함수
  const handleInputChange = (setState) => (e) => {
    setState(e.target.value);
  };

  /*-------------시간표시---------------*/
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

  /*-------------댓글 textarea 높이 조절---------------*/

  const textarea = useRef();

  const handleResizeHeight = () => {
    textarea.current.style.height = textarea.current.scrollHeight + "px";
  };

  const handleOnFocusTextarea = () => {
    textarea.current.style.height = textarea.current.scrollHeight + "px";
  };

  /*-------------create 기능---------------*/
  const handleCreateSubmit = async (e, parentId = null) => {
    e.preventDefault();
    if (!user) {
      alert("로그인이 필요한 영역입니다.");
      navigate("/login");
    } else {
      const userId = user.id;
      const postId = content._id;
      const commentData = {
        userId: userId,
        postId: postId,
        postType: "Content",
        comment: comment,
        parentId: parentId,
      };
      await postCommentToServer(commentData);
    }
  };

  const postCommentToServer = async (commentData) => {
    try {
      const response = await axios.post("/comments/create", commentData);
      alert("댓글 등록 성공!");
      readCommentsFunc();
      setComment("");
    } catch (error) {
      console.error("에러:", error);
      alert("댓글 등록 실패. 서버 에러.");
    }
  };

  /*-------------read 기능---------------*/
  const [commentList, setCommentList] = useState([]);

  const readCommentsFunc = async () => {
    try {
      const response = await axios.get(`/comments/read/${content._id}`);
      setCommentList(
        response.data.sort(
          (a, b) => new Date(b.postdate) - new Date(a.postdate)
        )
      );
    } catch (error) {
      if (error.response || error.response.status === 404) {
        setCommentList([]);
      } else {
        console.error("댓글 불러오기 에러:", error);
      }
    }
  };

  useEffect(() => {
    readCommentsFunc();
  }, []);

  /*-------------update 기능---------------*/
  const [editId, setEditId] = useState(null);
  const [editComment, setEditComment] = useState("");

  const handleUpdate = async (_id, comment) => {
    setEditId(_id);
    setEditComment(comment);
    // setEditId와 setEditComment가 완료된 후에 textarea에 포커스를 줌
    await Promise.resolve(); // 비동기 처리를 위해 빈 Promise를 생성
    textarea.current.focus();
  };

  const handleCancel = () => {
    setEditId(null);
    setEditComment("");
  };

  const handleComplete = async (_id) => {
    const commentData = {
      comment: editComment,
    };

    await updateCommentToServer(_id, commentData);
  };

  const updateCommentToServer = async (_id, commentData) => {
    try {
      const response = await axios.put(`/comments/update/${_id}`, commentData);

      alert("댓글 수정 성공!");
      setEditComment("");
      readCommentsFunc();
      setEditId(null);
    } catch (error) {
      console.error("에러:", error);
      alert("댓글 수정 실패. 서버 에러.");
    }
  };

  /*-------------delete 기능---------------*/
  const deleteContents = async (_id, checkValue) => {
    const isConfirmed = window.confirm("정말로 삭제하시겠습니까?");

    if (isConfirmed) {
      try {
        const response = await axios.delete(`/comments/delete/${_id}`);

        readCommentsFunc();
      } catch (error) {
        console.error("에러:", error);
        alert("삭제 실패");
      }
    }
  };

  return (
    <S.CommentAndFormBox>
      <h3>댓글</h3>
      {commentList[0] && (
        <S.CommentBox>
          <ul>
            {/**댓글 리스트*/}
            {commentList.map((comment) => {
              return (
                <li className="comment_list" key={comment._id}>
                  <div className="profile_box">
                    <img
                      src={"/img/" + comment.userId.profileimg}
                      alt="유저이미지"
                    ></img>

                    <div className="userid">{comment.userId.nickname}</div>
                  </div>
                  <div className="comment_box">
                    <div className="comment_detail_box">
                      <div className="text_detail">
                        {editId === comment._id ? (
                          <textarea
                            ref={textarea}
                            type="text"
                            value={editComment}
                            onChange={(event) => {
                              handleInputChange(setEditComment)(event); // handleInputChange 함수 호출
                              handleResizeHeight(); // handleResizeHeight 함수 호출
                            }}
                            onFocus={handleOnFocusTextarea}
                            placeholder="댓글 달기..."
                          />
                        ) : (
                          <div className="comment">{comment.comment}</div>
                        )}
                      </div>
                      <div>
                        <div className="date">
                          {timeString(comment.postdate)}
                        </div>
                        {user && comment.userId._id === user.id && (
                          <div className="edit_delete">
                            <button
                              onClick={() =>
                                editId === comment._id
                                  ? handleComplete(comment._id)
                                  : handleUpdate(comment._id, comment.comment)
                              }
                            >
                              {editId === comment._id ? "완료" : "수정"}
                            </button>
                            <button
                              onClick={() =>
                                editId === comment._id
                                  ? handleCancel()
                                  : deleteContents(comment._id, "comments")
                              }
                            >
                              {editId === comment._id ? "취소" : "삭제"}
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </S.CommentBox>
      )}
      <S.CommentForm className="comment_form" onSubmit={handleCreateSubmit}>
        <input
          type="text"
          value={comment}
          onChange={handleInputChange(setComment)}
          placeholder="댓글 달기..."
        />
        <button type="submit">작성</button>
      </S.CommentForm>
    </S.CommentAndFormBox>
  );
};
