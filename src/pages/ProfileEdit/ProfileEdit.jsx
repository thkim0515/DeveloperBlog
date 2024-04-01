import { ProfileInfo } from "./ProfileInfo";
import { PasswordAndUserOut } from "./PasswordAndUserOut";
import { useUserLogin } from "../../context/UserLoginContext";

export const ProfileEdit = () => {
  //유저정보
  const { user } = useUserLogin();

  return (
    <>
      {user && (
        <>
          <ProfileInfo />
          <PasswordAndUserOut />
        </>
      )}
    </>
  );
};
