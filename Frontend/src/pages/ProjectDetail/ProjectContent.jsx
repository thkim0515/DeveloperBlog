import * as S from "./ProjectDetail.style";

export const ProjectContent = content => {
  return (
    <S.ProjectContentBox>
      <div></div>
      <pre>{content.content}</pre>
    </S.ProjectContentBox>
  );
};
