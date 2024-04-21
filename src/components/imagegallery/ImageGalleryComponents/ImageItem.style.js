import styled from "styled-components";

/*아이템 전체 박스 */
export const SItem = styled.div`
  width: calc(33.333% - 14px);
  height: 240px;
  display: flex;
  flex-direction: column;
  position: relative;
  border: 1px solid #dbe2ef;
  border-radius: 12px;
  overflow: hidden;

`;

/**컨텐츠 내용 박스 */
export const RoutingPage = styled.div`
  cursor: pointer;
  height: 75%;
  border-bottom: 1px solid #dbe2ef;

  .lang_box{
    height: 48px;
    padding: 10px;
    color: #fff;
    font-size: 24px;
    font-weight: bold;
  }

  .text_contents_box{

    height: calc(100% - 48px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    gap: 24px;

    h2 {
    width: 100%;
    padding: 0 8px;
    height: 32px;
    text-align: center;
    line-height: 32px;
    font-size: 24px;
    font-weight: bold;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    }

    .post_date{
      align-self: flex-end;
      padding-right: 8px;
    }
  }

  .svgIcon {
    width: 2rem;
    height: 2rem;
    position: absolute;
    top: 8px;
    right: 10px;
    font-size: 2.5rem;
    z-index: 1;
  }
`;


/**user, 글 조회수, 좋아요, 댓글 정보 박스 */
export const UserDateBox = styled.div`
    height: 25%;
    background-color: #fff;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 0 10px;

  .user_info {
    display: flex;
    align-items: center;
    flex-grow: 1;
  }

  .user_write_info {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
`

/**프로필 이미지 */
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
