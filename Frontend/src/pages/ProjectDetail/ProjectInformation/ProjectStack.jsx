import { getLanguageIcon } from "../../../utils/getImagePath";
import * as S from "./ProjectInformation.style";

export const ProjectStack = ({ stacks }) => {
  return (
    <div>
      <S.InfoTitle>필요 기술</S.InfoTitle>
      <ul>
        {stacks.map((stack, idx) => (
          <S.StackBox key={`stack-${idx}`}>
            <img src={getLanguageIcon(stack)} alt={stack} />
          </S.StackBox>
        ))}
      </ul>
    </div>
  );
};
