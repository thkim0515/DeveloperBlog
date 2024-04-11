import React from "react";
import axios from "axios";
import * as S from "./PostDetailComp.style";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export const PostDetailWriter = ({ content }) => {
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

  const navigate = useNavigate();

  const updateContents = (_id) => () => {
    navigate(`/postUpdate/${_id}`, { state: { _id } });
  };

  const deleteContents = async (_id) => {
    const isConfirmed = window.confirm("정말로 삭제하시겠습니까?");

    if (isConfirmed) {
      try {
        const response = await axios.delete(`/contents/delete/${_id}`);
        console.log("서버 응답:", response.data);
        navigate("/");
        window.location.reload();
      } catch (error) {
        console.error("에러:", error);
        alert("삭제 실패");
      }
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
        <button onClick={updateContents(content._id)}>수정하기</button>
        <button onClick={() => deleteContents(content._id)}>삭제하기</button>
      </S.DropList>
    </S.WriterBox>
  );
};
