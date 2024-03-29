import { useLocation, useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";

import * as S from "./postDetail.style";

export const PostDetail = () => {
  const location = useLocation();
  const { image } = location.state;

  const history = useNavigate();
  const handleGoBack = () => {
    history(-1);
  };

  return (
    <>
      {image.imagePath && (
        <S.SContainer>
          <S.STitle>
            <h3>
              <img src={`../svg/${image.lang}`} alt={image.lang} />
              {image.title}
            </h3>
            <S.StyledDropdown>
              <S.StyledDropdownToggle>...</S.StyledDropdownToggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">수정하기</Dropdown.Item>
                <Dropdown.Item href="#/action-2">삭제하기</Dropdown.Item>
              </Dropdown.Menu>
            </S.StyledDropdown>
          </S.STitle>
          <S.SSpace>
            {/* <img src={`../${image.imagePath}`} alt={image.title} /> */}
            <S.SProfileImage title="프로필">
              {image.profileImg && (
                <S.ProfileImage
                  src={`../${image.imagePath}`}
                  alt={image.profileImg}
                />
              )}
            </S.SProfileImage>
            {image.writer}
          </S.SSpace>
          <S.SImageContent>
            <img src={`../${image.imagePath}`} alt={image.title} />
            <p>{`본문내용 입니다 >>> ${image.contents}`}</p>
            <button onClick={handleGoBack}>뒤로가기</button>
          </S.SImageContent>
        </S.SContainer>
      )}
    </>
  );
};
