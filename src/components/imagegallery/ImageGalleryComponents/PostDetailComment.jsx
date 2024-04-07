import { useState, useEffect } from "react";
import axios from "axios";
import * as S from "./PostDetailComp.style";
import { useNavigate } from "react-router-dom";

export const PostDetailComment = ({ image }) => {
  const navigate = useNavigate();

  //댓글 목록
  const [commentList, setCommentList] = useState([]);
  const [comment, setComment] = useState("");
  const handleInputChange = (e) => {
    setComment(e.target.value);
  };

  //기존 댓글 목록 불러오기
  // useEffect(() => {
  //   axios({
  //     url: "엔드포인트",
  //     method: "GET",
  //   })
  //     // 성공
  //     .then((res) => {
  //       setCommentList(res.data);
  //     })
  //     // 에러
  //     .catch((err) => {
  //       console.log(`AXIOS 실패!${err}`);
  //     });
  // }, []);

  // //댓글 작성 버튼 제출시 작동하는 함수(프론트에서만)
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setComment((current) => {
  //     const newList = [...current];
  //     newList.push({
  //       img: user.profile,
  //       nickname: user.nickname,
  //       text: inputValue,
  //       date: "2024.04.06",
  //     });
  //     return newList;
  //   });
  //   setInputValue("");
  // };

  // function handleComment(event) {
  //   setComment(event.target.value);
  // }

  // 댓글 삭제 버튼
  const handleCommentDelete = () => {};

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = JSON.parse(sessionStorage.getItem("user"));
    if (!user) {
      alert("로그인이 필요한 영역입니다.");
      navigate("/login");
    } else {
      const nickname = user.nickname;
      const postId = image.pid;
      const commentData = {
        postId: postId,
        nickname: nickname,
        comment: comment,
      };
      await postCommentToServer(commentData);
    }
  };

  const postCommentToServer = async (commentData) => {
    try {
      const response = await axios.post("/comments/create", commentData);
      console.log("서버 응답:", response.data);
      alert("댓글 등록 성공!");
      setComment("");
      setCommentList(response.data);
    } catch (error) {
      console.error("에러:", error);
      alert("댓글 등록 실패. 서버 에러.");
    }
  };

  return (
    <S.CommentAndFormBox>
      {commentList[0] && (
        <S.CommentBox>
          <ul>
            {/**댓글 리스트*/}
            {commentList.map((item, index) => {
              return (
                <li className="comment_list" key={index}>
                  <div className="profile_box">
                    <img src={item.profile} alt="유저이미지"></img>
                    <div className="userid">{item.nickname}</div>
                  </div>
                  <div className="comment_text">
                    <div className="comment_detail">
                      <div>{item.comment}</div>
                      <div className="date">{item.postdate}</div>
                    </div>
                    <div className="edit_delete">
                      <button onClick={handleCommentDelete}>삭제</button>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </S.CommentBox>
      )}

      <S.CommentForm className="comment_form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={comment}
          onChange={handleInputChange}
          placeholder="댓글 달기..."
        />
        <button type="submit">작성</button>
      </S.CommentForm>
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
    </S.CommentAndFormBox>
  );
};
