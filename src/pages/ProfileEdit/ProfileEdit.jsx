import * as S from "./ProfileEdit.style.js";
import { ProfileInfo } from "./ProfileInfo";
import { PasswordEdit } from "./PasswordEdit";
export const ProfileEdit = () => {
  return (
    <>
      <ProfileInfo />
      <PasswordEdit />
      <S.UseroutBtn>회원탈퇴</S.UseroutBtn>
    </>
  );
};
