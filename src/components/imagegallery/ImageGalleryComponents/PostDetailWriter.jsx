import React from "react";
import axios from "axios";
import * as S from "./PostDetailComp.style";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export const PostDetailWriter = () => {
  //드롭박스 열기/닫기 상태관리
  const [isDropOpen, setIsDropOpen] = useState(false);

  //드롭박스 참조
  const dropMenuRef = useRef();

  useEffect(() => {
    const clickOutside = (e) => {
      if (isDropOpen && !dropMenuRef.current.contains(e.target)) {
        setIsDropOpen(false);
      }
    };
    document.addEventListener("mousedown", clickOutside);
    return () => {
      document.removeEventListener("mousedown", clickOutside);
    };
  }, [isDropOpen]);

  //수정버튼 클릭 함수
  const navigate = useNavigate();
  const handleEdit = () => {
    navigate("/postUpdate");
  };

  //삭제버튼 클릭함수
  const handleDelete = () => {
    // 확인 창 띄우기
    const isConfirmed = window.confirm("게시물을 삭제하시겠습니까?");

    if (isConfirmed) {
      // 서버에 삭제 요청 보내는 로직 추가
      axios({
        url: `/엔드포인트`,
        method: "DELETE",
      })
        .then((res) => {
          // 삭제 성공 시
          console.log("게시물이 성공적으로 삭제되었습니다.");
          navigate("/");
        })
        .catch((err) => {
          // 삭제 실패 시 에러 처리
          console.error("게시물 삭제 실패:", err);
        });
    }
  };
  return (
    <S.WriterBox className="writer-box" ref={dropMenuRef}>
      <div
        className="drop-box-btn"
        onClick={() => {
          setIsDropOpen(!isDropOpen);
        }}
      >
        ...
      </div>
      <S.DropList $isOpen={isDropOpen}>
        <button onClick={handleEdit}>수정하기</button>
        <button onClick={handleDelete}>삭제하기</button>
      </S.DropList>
    </S.WriterBox>
  );
};
