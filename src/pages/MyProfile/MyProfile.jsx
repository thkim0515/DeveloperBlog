import * as S from "./MyProfile.style.js";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { decryptData } from "../../utils/secure";

// components
import { Metas } from "../../components/common/Metas.jsx";
import { ProjectAlarm } from "./ProjectAlarm/ProjectAlarm.jsx";
import { SideTab } from "./SideTab/SideTab.jsx";
import { ProjectCard } from "../../components/ProjectCard/ProjectCard.jsx";

// context
import { useUserLogin } from "../../context/UserLoginContext";

export const MyProfile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [data, setData] = useState([]);

  const { profileDB } = useUserLogin();
  const selectedTab = useSelector(state => state.tab.selectedTab);

  // 유저정보 받아와서 프로필 데이터로 저장
  const bucketUrl = useSelector(state => state.bucketUrl);
  const imageUrl = bucketUrl ? bucketUrl.imageUrl : "";

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

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`/project/myproject/${user.id}`);
        const data = response.data;
        setData(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [user]);

  const handleEditButtonClick = () => {
    navigate("/profileEdit");
  };

  return (
    <>
      <Metas title="My Profile" none />
      <S.ProfileTitle>Profile</S.ProfileTitle>
      <S.MyProfileBox>
        <div>
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
        </div>

        {/* Side Tab */}
        <div>
          <SideTab className="sideTab" />
        </div>

        {/* 프로젝트 리스트 */}
        <S.TeamProjectBox>
          {selectedTab === "myProject" && data.map((data, idx) => <ProjectCard key={idx} data={data} />)}
        </S.TeamProjectBox>

        {/* 프로젝트 알림 */}
        {selectedTab === "projectAlarm" && <ProjectAlarm />}
      </S.MyProfileBox>
    </>
  );
};
