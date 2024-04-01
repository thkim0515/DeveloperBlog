<<<<<<< HEAD
import { ProfileInfo } from "./ProfileInfo";
import { PasswordAndUserOut } from "./PasswordAndUserOut";
import { useUserLogin } from "../../context/UserLoginContext";

export const ProfileEdit = () => {
  //유저정보
  const { loginUser } = useUserLogin();

  return (
    <>
      {loginUser && (
        <>
          <ProfileInfo />
          <PasswordAndUserOut />
        </>
      )}
=======
import * as S from "./ProfileEdit.style.js";
import { ProfileInfo } from "./ProfileInfo";
import { PasswordEdit } from "./PasswordEdit";
export const ProfileEdit = () => {
  return (
    <>
      <ProfileInfo />
      <PasswordEdit />
      <S.UseroutBtn>회원탈퇴</S.UseroutBtn>
>>>>>>> serverDB
    </>
  );
};
