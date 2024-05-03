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

    const currentPassword = password;
    const editData = { ...profileDB };
    editData.password = newPassword;

    const requestData = {
      editData: editData,
      currentPassword: currentPassword,
    };

    //새로운 비밀번호와 재입력 비밀번호가 일치하는지 확인
    if (newPassword !== confirmPassword) {
      alert("새로운 비밀번호와 재입력 비밀번호가 일치하지않습니다.");
      return;
    }

    //공백은 제출 불가능
    if (newPassword.trim() === "" || password.trim() === "") {
      alert("비밀번호를 입력해주세요.");
      return;
    }

    //일치하면 업데이트 시도
    try {
      await axios.put(`/users/updatePwd/${profileDB._id}`, requestData);
      setIsChange(true);
      alert("비밀번호가 변경되었습니다. 다시 로그인 해주세요");
      logout(setIsLogin, setUser, setIsChange, navigate);
    } catch (error) {
      if (error.response && error.response.status === 409) {
        alert(error.response.data.message);
      } else if (error.response && error.response.status === 400) {
        alert(error.response.data.message);
      } else {
        alert("비밀번호 변경 실패");
      }
    }
  };

  //회원 탈퇴 기능
  const handleDelete = async () => {
    const isConfirmed = window.confirm("정말로 탈퇴하시겠습니까?");
    if (isConfirmed) {
      try {
        await axios.delete(`/users/delete/${profileDB._id}`);

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
          <label htmlFor="username" style={{ display: "none" }}>
            사용자명:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            style={{ display: "none" }}
            autoComplete="username"
          />
          <label htmlFor="current-password">현재 비밀번호</label>
          <input
            type="password"
            name="current-password"
            autoComplete="off"
            onChange={handleInputChange(setPassword)}
          />
          <label htmlFor="new-password">새로운 비밀번호</label>
          <input
            type="password"
            name="new-password"
            autoComplete="new-password"
            onChange={handleInputChange(setNewPassword)}
          />
          <label htmlFor="new-password-confirm">비밀번호 재입력</label>
          <input
            type="password"
            name="new-password-confirm"
            autoComplete="new-password"
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
