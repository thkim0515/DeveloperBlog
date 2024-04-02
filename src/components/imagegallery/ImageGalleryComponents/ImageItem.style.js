import styled from "styled-components";

export const SItem = styled.div`
  width: calc(33.333% - 14px);
  height: 350px;
  display: flex;
  flex-direction: column;
  position: relative;
  border: 3px solid grey;
  border-radius: 12px;
  overflow: hidden;

  img {
    width: 100%;
    height: 240px;
    object-fit: cover;
    border-radius: 12px 12px 0 0;
  }

  h2 {
    height: 10%;
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    margin: 10px 0;
  }

  .svgIcon {
    width: 2.5rem;
    height: 2.5rem;
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 2.5rem;
    z-index: 1;
  }

  .user_date_box {
    height: 10%;
    display: flex;
    align-items: center;
    padding: 0 10px;
  }

  .user_info {
    display: flex;
    align-items: center;
    flex-grow: 1;
  }

  .user_write_info {
    margin: 0 10px;
  }
`;

export const SProfileImage = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  border-radius: 70%;
  overflow: hidden;
`;

export const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const RoutingPage = styled.div`
  cursor: pointer;
`;
