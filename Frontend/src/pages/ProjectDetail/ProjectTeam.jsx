import { UserProfile } from "../../components/common/UserProfile";
import { getProfileImg } from "../../utils/getImagePath";
import * as S from "./ProjectDetail.style";

export const ProjectTeam = () => {
  return (
    <S.ProjectTeamBox>
      <div>
        <h3>팀장</h3>
        <S.ProfileBox>
          <UserProfile imagePath={""} nickname={"dd"} direction="column" />
        </S.ProfileBox>
      </div>

      <div>
        <h3>팀원</h3>
        <S.ProfileBox>
          <UserProfile imagePath={""} nickname={"dd"} direction="column" />
          <UserProfile imagePath={""} nickname={"dd"} direction="column" />
        </S.ProfileBox>
      </div>
    </S.ProjectTeamBox>
  );
};
