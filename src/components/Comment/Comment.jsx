import { useState, useEffect, useRef } from "react";
import axios from "axios";
import * as S from "./Comment.style";
import { useNavigate } from "react-router-dom";
import { useUserLogin } from "../../context/UserLoginContext";
import { timeStringWithHour } from "../../utils/timeString";
import { organizeComments } from "./CommentUtil";
import { MainPagination } from "../imagegallery/ImageGalleryComponents/MainPagination";
import { useCalculatePage } from "./CommentUtil";

export const Comment = ({ content }) => {
  //로그인 유저 정보 가져오기
  const { user } = useUserLogin();

  const navigate = useNavigate();

  //댓글 작성 상태관리
  const [comment, setComment] = useState("");

  //댓글 작성, 수정 input값 변경 감지 함수
  const handleInputChange = (setState) => (e) => {
    setState(e.target.value);
  };

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
      const postType = content.ace_contents;

      const commentData = {
        userId: userId,
        postId: postId,
        postType: postType ? "Content" : "Project",
        comment: parentId ? reply[parentId] : comment,
        parentId: parentId,
      };
      await postCommentToServer(commentData);
      if (parentId) {
        setReply({ ...reply, [parentId]: "" });
        setReplyId(null);
      }
    }
  };

  const postCommentToServer = async (commentData) => {
    try {
      await axios.post("/comments/create", commentData);
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
      const organized = organizeComments(response.data);
      setCommentList(organized);
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
      await axios.put(`/comments/update/${_id}`, commentData);
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
    const isConfirmed = window.confirm("댓글을 삭제하시겠습니까?");

    if (isConfirmed) {
      try {
        await axios.delete(`/comments/delete/${_id}`);

        readCommentsFunc();
      } catch (error) {
        console.error("에러:", error);
        alert("삭제 실패");
      }
    }
  };

  /*-------------대댓글 기능---------------*/
  const [replyId, setReplyId] = useState(null);
  const [reply, setReply] = useState({});
  const handleReplyChange = (commentId) => (event) => {
    setReply({ ...reply, [commentId]: event.target.value });
  };

  const toggleReplyInput = (id) => {
    if (!user) {
      alert("로그인이 필요한 영역입니다.");
      return;
    }

    if (replyId === id) {
      setReplyId(null);
    } else {
      setReplyId(id);
    }
  };

  /*----------페이지네이션------------*/
  const {
    currentComments,
    currentPage,
    totalPages,
    paginate,
    nextPage,
    prevPage,
    firstPage,
    lastPage,
  } = useCalculatePage(10, commentList);

  console.log(commentList);
  return (
    <S.CommentAndFormBox>
      <h3>댓글</h3>
      <S.CommentForm className="comment_form" onSubmit={handleCreateSubmit}>
        <input
          type="text"
          value={comment}
          onChange={handleInputChange(setComment)}
          placeholder="댓글 쓰기..."
        />
        <button type="submit">작성</button>
      </S.CommentForm>
      {commentList[0] && (
        <S.CommentBox>
          <ul>
            {/**댓글 리스트*/}
            {currentComments.map((comment) => {
              return (
                <>
                  <li
                    className="comment_list"
                    key={comment._id}
                    style={{ marginLeft: comment.parentId ? "20px" : "0px" }}
                  >
                    <div className="profile_box">
                      <img
                        src={
                          "https://starblog-bucket.s3.ap-northeast-2.amazonaws.com/profileImg/" +
                          comment.userId.profileimg
                        }
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
                              placeholder="댓글 쓰기..."
                            />
                          ) : (
                            <div className="comment">
                              <pre>{comment.comment}</pre>
                            </div>
                          )}
                        </div>
                        <div>
                          <div className="date">
                            {timeStringWithHour(comment.postdate)}
                          </div>
                          {user && comment.userId._id === user.id ? (
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
                          ) : (
                            // 대댓글 입력 여부 - 본인댓글엔 대댓글 X
                            <div className="edit_delete">
                              <button
                                onClick={() => toggleReplyInput(comment._id)}
                              >
                                {!user || replyId === comment._id ? "" : "답글"}
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </li>
                  {/* 대댓글 입력창 렌더링 - replyId 값에따라 조건부 렌더링 */}
                  {replyId === comment._id && (
                    <S.ReplyBox key={replyId}>
                      <div className="reply_title">ㄴ답글</div>
                      <input
                        type="text"
                        value={reply[comment._id] || ""}
                        onChange={handleReplyChange(comment._id)}
                      />
                      <div className="submit_cancel">
                        <button
                          onClick={(e) => handleCreateSubmit(e, comment._id)}
                        >
                          등록
                        </button>
                        <button onClick={(e) => setReplyId(null)}>취소</button>
                      </div>
                    </S.ReplyBox>
                  )}
                </>
              );
            })}
          </ul>
        </S.CommentBox>
      )}
      {commentList[0] && (
        <MainPagination
          currentPage={currentPage}
          totalPages={totalPages}
          paginate={paginate}
          nextPage={nextPage}
          prevPage={prevPage}
          firstPage={firstPage}
          lastPage={lastPage}
        />
      )}
    </S.CommentAndFormBox>
  );
};
