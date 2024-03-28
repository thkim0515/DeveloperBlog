import React from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import NavItem from "react-bootstrap/NavItem";
import NavLink from "react-bootstrap/NavLink";
import { ProfileImage } from "./ImageItem.style";
import { SProfileImage } from "./ImageItem.style";
import { SContainer, STitle, SSpace, SImageContent } from "./postDetail.style";

export const PostDetail = () => {
  const location = useLocation();
  const { image } = location.state;

  const history = useNavigate();
  const handleGoBack = () => {
    history(-1); // 이전 페이지로 이동
  };

  return (
    <>
      {image.imagePath && (
        <SContainer>
          <STitle>
            <img src={`../svg/${image.lang}`} alt={image.lang} />
            <h3>{image.title}</h3>
            {/* <Dropdown as={NavItem}>
              <Dropdown.Toggle as={NavLink}>...</Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>수정하기</Dropdown.Item>
                <Dropdown.Item>삭제하기</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown> */}
          </STitle>
          <SSpace>
            {/* <img src={`../${image.imagePath}`} alt={image.title} /> */}
            <SProfileImage title="프로필">
              {image.profileImg && (
                <ProfileImage
                  src={`../${image.imagePath}`}
                  alt={image.profileImg}
                />
              )}
            </SProfileImage>
            {image.writer}
          </SSpace>
          <SImageContent>
            <img src={`../${image.imagePath}`} alt={image.title} />
            <p>{`본문내용 입니다 >>> ${image.contents}`}</p>
            <button onClick={handleGoBack}>뒤로가기</button>
          </SImageContent>
        </SContainer>
      )}
    </>
  );
};
