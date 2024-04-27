import * as S from "./Recruitment.style";
import { IMAGE_PATHS, IMAGE_ALT_TEXT } from "../../../../utils/stacks";

export const RecruitmentInfo = () => {
  return (
    <section>
      <ul>
        <li>
          <span className="recruitment-info-title">모집 인원</span>
          <span>인원 미정</span>
        </li>
        <li>
          <span className="recruitment-info-title">모집 기간</span>
          <span>~2024.04.26</span>
        </li>
        <li>
          <span className="recruitment-info-title">모집 분야</span>
          <ul>
            <li>프론트엔드</li>
            <li>백엔드</li>
            <li>디자이너</li>
          </ul>
        </li>
        <li>
          <span className="recruitment-info-title">사용 언어</span>
          <S.IconBox>
            <li>
              <img src={IMAGE_PATHS.node} alt={IMAGE_ALT_TEXT.node} />
            </li>
            <li>
              <img src={IMAGE_PATHS.java} alt={IMAGE_ALT_TEXT.java} />
            </li>
            <li>
              <img src={IMAGE_PATHS.react} alt={IMAGE_ALT_TEXT.react} />
            </li>
          </S.IconBox>
        </li>
      </ul>
    </section>
  );
};
