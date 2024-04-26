import * as S from "./TeamProject.style";
import { TeamprojectCard } from "./ProjectCard";

const projectData = [
  {
    id: 1,
    _pid: "dsfs0324238dbfgs",
    nickname: "nano0912",
    profileImage: "image",
    startDate: "2024-05-02",
    views: 30,
    title: "gps 기반 기온별 옷차림 공유 사이트",
    hashTags: ["#SNS", "#플랫폼"],
    stacks: { react: "image", redux: "image", node: "image", mongoDB: "image" },
    roles: ["기획자", "디자이너", "프론트", "백엔드"],
    recruitmentCompleted: 2,
    tableOfOrganiztion: 5,
  },
  {
    id: 2,
    _pid: "nsr980234sfg32789",
    nickname: "nano0912",
    profileImage: "image",
    startDate: "2024-03-15",
    views: 32,
    title: "코드해석해주는 개발블로그",
    hashTags: ["#블로그"],
    stacks: ["react", "node", "mongoDB", "redux"],
    roles: ["프론트", "백엔드"],
    recruitmentCompleted: 3,
    tableOfOrganiztion: 3,
  },
];

export const TeamProject = () => {
  return (
    <S.TeamProjectBox>
      {projectData.map((data) => (
        <TeamprojectCard key={data.id} props={data} />
      ))}
    </S.TeamProjectBox>
  );
};
