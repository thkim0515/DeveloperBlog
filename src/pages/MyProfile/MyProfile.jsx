import * as S from "./MyProfile.style.js";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { decryptData } from "../../utils/secure";

// components
import { Metas } from "../../components/common/Metas.jsx";
import { MyProject } from "./MyProject/MyProject.jsx";
import { ProjectAlarm } from "./ProjectAlarm/ProjectAlarm.jsx";
import { SideTab } from "./SideTab/SideTab.jsx";

// context
import { useUserLogin } from "../../context/UserLoginContext";

export const MyProfile = () => {
  const navigate = useNavigate();

  const { profileDB } = useUserLogin();
  const selectedTab = useSelector(state => state.tab.selectedTab);

  // 유저정보 받아와서 프로필 데이터로 저장
  const bucketUrl = useSelector(state => state.bucketUrl);
  const imageUrl = bucketUrl ? bucketUrl.imageUrl : "";
  const [user, setUser] = useState("");
  // 컴포넌트가 마운트될 때 세션 스토리지에서 데이터 가져오기
  useEffect(() => {
    const getUserSession = async () => {
      try {
        const storedUser = await decryptData("user", sessionStorage);
        setUser(storedUser);
      } catch (error) {
        console.error("error", error);
      }
    };

    getUserSession();
  }, []);
  console.log(`myProfile-user ${user}`);

  const handleEditButtonClick = () => {
    navigate("/profileEdit");
  };

  return (
    <>
      <Metas title="My Profile" none />
      <section>
        <S.ProfileInfoMainBox>
          <S.InfoBox>
            {profileDB && (
              <>
                <S.ProfileImgBox onClick={handleEditButtonClick}>
                  <S.ProfileImg alt="프로필 이미지" src={`${imageUrl}profileImg/` + profileDB.profileimg} />
                </S.ProfileImgBox>
                <S.ProfileTextBox>
                  <div className="nickname">
                    <p>{profileDB.id}</p>
                  </div>
                </S.ProfileTextBox>
              </>
            )}
          </S.InfoBox>
        </S.ProfileInfoMainBox>

        {/* Side Tab */}
        <SideTab />

        {/* 프로젝트 리스트 */}
        {selectedTab === "myProject" && <MyProject user={user.id} />}
        {}

        {/* 프로젝트 알림 */}
        {selectedTab === "projectAlarm" && <ProjectAlarm />}
      </section>
    </>
  );
};
