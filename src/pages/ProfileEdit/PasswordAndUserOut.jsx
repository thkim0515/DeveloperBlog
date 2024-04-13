import * as S from "./ProfileEdit.style.js";
import axios from "axios";
import { useUserLogin } from "../../context/UserLoginContext";
import { logout } from "../../components/Layout/UserLogin.jsx";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const PasswordAndUserOut = () => {
  const { setIsLogin, setUser, setIsChange, profileDB } = useUserLogin();
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  //비밀번호 변경 input 관리
  const handleInputChange = (setState) => (e) => {
    setState(e.target.value);
  };

  //업데이트 요쳥
  const handleUpdate = async (e) => {
    e.preventDefault();
    const editData = { ...profileDB };
    editData.password = newPassword;

    //현재 비밀번호가 db 비밀번호와 일치하는지 확인
    if (password !== profileDB.password) {
      alert("현재 비밀번호가 일치하지않습니다.");
      return;
    }
    //새로운 비밀번호와 재입력 비밀번호가 일치하는지 확인
    if (newPassword !== confirmPassword) {
      alert("새로운 비밀번호와 재입력 비밀번호가 일치하지않습니다.");
      return;
    }

    //모두 일치하면 업데이트 시도
    try {
      const response = await axios.put(
        `/users/update/${profileDB._id}`,
        editData
      );
      console.log(response.data);
      setIsChange(true);
      navigate("/profile");
    } catch (error) {
      console.error("서버응답실패:", error);
      alert("비밀번호 변경 실패");
    }
  };

  //회원 탈퇴 기능
  const handleDelete = async () => {
    const isConfirmed = window.confirm("정말로 탈퇴하시겠습니까?");
    if (isConfirmed) {
      try {
        const response = await axios.delete(`/users/delete/${profileDB._id}`);
        console.log("서버 응답:", response.data);
        logout(setIsLogin, setUser, setIsChange, navigate);
      } catch (error) {
        console.error("에러:", error);
        alert("삭제 실패");
      }
    }
  };
  return (
    <S.PasswordAndUserOutBox>
      <S.PwdTitle>비밀번호 변경</S.PwdTitle>
      <S.PwdFormBox>
        <S.PwdForm onSubmit={handleUpdate}>
          <label>현재 비밀번호</label>
          <input type="password" onChange={handleInputChange(setPassword)} />
          <label>새로운 비밀번호</label>
          <input type="password" onChange={handleInputChange(setNewPassword)} />
          <label>비밀번호 재입력</label>
          <input
            type="password"
            onChange={handleInputChange(setConfirmPassword)}
          />
          <S.PwdEditButton type="submit">변경사항 저장</S.PwdEditButton>
        </S.PwdForm>
      </S.PwdFormBox>
      <S.UseroutBtnBox>
        <button onClick={handleDelete}>회원탈퇴</button>
      </S.UseroutBtnBox>
    </S.PasswordAndUserOutBox>
  );
};
