import { useState, useEffect } from "react";
import axios from "axios";
import * as S from "./PostDetailComp.style";
import { useUserLogin } from "../../../context/UserLoginContext";

export const PostDetailComment = () => {
  //로그인한 작성자 정보
  const { user } = useUserLogin();

  //댓글 목록
  const [comment, setComment] = useState([]);
  const [inputValue, setInputValue] = useState(""); //댓글 입력 값 관리
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // //기존 댓글 목록 불러오기
  // useEffect(() => {
  //   axios({
  //     url: "엔드포인트",
  //     method: "GET",
  //   })
  //     // 성공
  //     .then((res) => {
  //       setComment(res.data);
  //     })
  //     // 에러
  //     .catch((err) => {
  //       console.log(`AXIOS 실패!${err}`);
  //     });
  // }, []);

  //댓글 작성 버튼 제출시 작동하는 함수(프론트에서만)
  const handleSubmit = (e) => {
    e.preventDefault();
    setComment((current) => {
      const newList = [...current];
      newList.push({
        img: user.img,
        nickname: user.nickname,
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
                    <div className="userid">{item.nickname}</div>
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
