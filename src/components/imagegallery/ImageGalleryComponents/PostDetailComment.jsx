import { useState } from "react";
import * as S from "./PostDetailComp.style";

export const PostDetailComment = () => {
  //댓글 목록
  const [comment, setComment] = useState([]);

  const [inputValue, setInputValue] = useState(""); //댓글 입력 값 관리

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  //댓글 작성 버튼 제출시 작동하는 함수(프론트에서만)
  const handleSubmit = (e) => {
    e.preventDefault();
    setComment((current) => {
      const newList = [...current];
      newList.push({
        img: "../../img/noprofile.jpg",
        userid: "유저닉네임",
        text: inputValue,
        date: "2024.04.06",
      });
      return newList;
    });
    setInputValue("");
  };

  // 댓글 삭제 버튼(프론트만...)
  const handleCommentDelete = (index) => {
    setComment((current) => {
      const newList = [...current];
      newList.splice(index, 1);
      return newList;
    });
  };

  return (
    <S.CommentAndFormBox>
      {comment[0] && (
        <S.CommentBox>
          {/**임시 댓글  */}
          <ul>
            {/**작성한 댓글 리스트 보여주는 기능 */}
            {comment.map((item, index) => {
              return (
                <li className="comment_list" key={index}>
                  <div className="profile_box">
                    <img src={item.img} alt="유저이미지"></img>
                    <div className="userid">{item.userid}</div>
                  </div>
                  <div className="comment_text">
                    <div className="comment_detail">
                      <div>{item.text}</div>
                      <div className="date">{item.date}</div>
                    </div>
                    <div className="edit_delete">
                      <button onClick={() => handleCommentDelete(index)}>
                        삭제
                      </button>
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
          value={inputValue}
          onChange={handleInputChange}
          placeholder="댓글 달기..."
        />
        <button type="submit">작성</button>
      </S.CommentForm>
    </S.CommentAndFormBox>
  );
};
