import * as S from "./TeamProject.style";
import { ProjectCard } from "./ProjectCard/ProjectCard";
import { MainPagination } from "../../components/imagegallery/ImageGalleryComponents/MainPagination";

// hooks
import { useGetData } from "../../hooks/useGetData";

// 테스트용 데이터
const projectData = [
  {
    id: 1,
    _pid: "dsfs0324238dbfgs",
    nickname: "nano0912",
    profileImage: "",
    startDate: "D-20",
    updatedDate: "2024.04.26",
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
    nickname: "태헌1",
    profileImage: "",
    startDate: "D-7",
    updatedDate: "2024.03.26",
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
  const maxcount = 9;
  const {
    currentPage,
    totalPages,
    paginate,
    nextPage,
    prevPage,
    firstPage,
    lastPage,
  } = useGetData(maxcount);

  return (
    <>
      <h2>Team Project 모집</h2>
      <S.TeamProjectBox>
        {projectData.map((data) => (
          <ProjectCard key={data.id} props={data} />
        ))}
      </S.TeamProjectBox>
      <MainPagination
        currentPage={currentPage}
        totalPages={totalPages}
        paginate={paginate}
        nextPage={nextPage}
        prevPage={prevPage}
        firstPage={firstPage}
        lastPage={lastPage}
      />
    </>
  );
};
