import { ProfileInfo } from "./ProfileInfo";
import { PasswordAndUserOut } from "./PasswordAndUserOut";
import { useUserLogin } from "../../context/UserLoginContext";

export const ProfileEdit = () => {
  //유저정보
  const { profileDB } = useUserLogin();

  return (
    <>
      {profileDB && (
        <>
          <ProfileInfo />
          <PasswordAndUserOut />
        </>
      )}
    </>
  );
};
