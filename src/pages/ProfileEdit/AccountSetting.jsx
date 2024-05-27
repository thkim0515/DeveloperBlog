import { ProfileInfo } from "./ProfileInfo";
import { PasswordAndUserOut } from "./PasswordAndUserOut";
import { useUserLogin } from "../../context/UserLoginContext";
import { Metas } from "../../components/common/Metas";

export const AccountSetting = () => {
  //유저정보
  const { profileDB } = useUserLogin();

  return (
    <>
      <Metas title="프로필 수정" none />
      {profileDB && (
        <>
          <ProfileInfo />
          <PasswordAndUserOut />
        </>
      )}
    </>
  );
};
