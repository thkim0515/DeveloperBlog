import { Metas } from "../../components/common/Metas";
import { CodeList } from "./CodeList";
import * as S from "./Main.style";

export const Main = () => {
  return (
    <S.MainBox>
      <Metas main="main" />
      <h2>최신 Code</h2>
      <CodeList />
      <h2>팀프로젝트 모집</h2>
    </S.MainBox>
  );
};
