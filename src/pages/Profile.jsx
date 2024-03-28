import { ProfileInfo } from "../components/Profile/ProfileInfo";
import { PasswordChange } from "../components/Profile/PasswordChange";
import { UserOut } from "../components/Profile/UserOut";

export const Profile = () => {
  return (
    <>
      <ProfileInfo />
      <PasswordChange />
      <UserOut />
    </>
  );
};
