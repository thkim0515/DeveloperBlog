import styled from "styled-components";

export const SContainer = styled.div`
  //width: 1140px;
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
`;

export const STitle = styled.div`
  background-color: #3f72af;
  width: 100%;
  height: 60px;
  display: flex;
  // justify-content: space-between;
  align-items: center;
  gap: 10px;
  font-size: 1.5rem;
  color: white;
  border-radius: 12px 12px 0 0;

  .img_box {
    background-color: white;
    width: 3rem;
    left: 10px;
    margin-left: 20px;
    border-radius: 6px;
    img {
      font-size: 3rem;
      width: 3rem;
      height: 3rem;
    }
  }

  h3 {
    height: 24px;
    text-align: center;
    font-size: 24px;
    margin: 10px;
    overflow: hidden;
    white-space: nowrap;
  }

`;

//작성자일 때 나타나는 아이콘
export const WriterBox = styled.div`
  position: relative;
  margin-left: auto;
  height: 100%;
  display: flex;
  align-items: center;
  .drop-box-btn{
    width: 60px;
    height: 24px;
    text-align: center;
    line-height: 12px;
    cursor: pointer;
  }
`

//수정하기, 삭제하기 드롭박스
export const DropList = styled.div`
  display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
  position: absolute;
  z-index: 10;
  top: 60px;
  right: 0;
  flex-direction: column;
  background-color: #3f72af;

  button {
    width: 80px;
    height: 40px;
    color: white;
    font-size: 1rem;
  }

  button:first-child {
    border-bottom: 1px solid #dbe2ef;
  }
`


export const SSpace = styled.div`
  width: 100%;
  background-color: #dbe2ef;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  div {
    justify-content: space-between;
    margin: 0 10px;
  }
`;

export const SImageContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  img {
    width: 100%;
    overflow: hidden;
  }

  .ace_content{
    height: 0px !important;
  }

  .text_area{
    width: 100%;
    background-color: white;
    padding: 8px;
    border-radius: 0 0 12px 12px;
  }

  p {
    width: 100%;
    overflow-wrap: break-word;
    white-space: normal;
    background-color: white;
    padding: 8px;
    line-height: 2;
  }
  button {
    margin-top: 24px;
    width: 80px;
    height: 40px;
    padding: 10px;
    background-color: #3f72af;
    color: #fff;
    border: none;
    border-radius: 12px;
    cursor: pointer;
  }
`;

export const SProfileImage = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  border-radius: 70%;
  overflow: hidden;
  margin-left: 20px;
`;

export const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

// export const StyledDropdownToggle = styled.div`
//   &::after {
//     display: none; // 화살표 숨기기
//   }
//   background-color: #3f72af;
//   border: none;
//   font-size: 2rem;
//   gap: 10px;
// `;

// export const StyledDropdown = styled.div`
//   display: inline-block;
//   margin-right: 1rem;
// `;

/** 댓글 창 스타일 */

export const CommentAndFormBox = styled.div`
  width: 100%;
`

export const CommentBox = styled.div`
  margin: 20px auto;
  border: 1px solid #dbe2ef;

    .comment_list {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px 8px 8px 0;

      .profile_box {
        width: 8%;
        display: flex;
        flex-flow: column;
        align-items: center;
        

        img {
          width: 40px;
          height: 40px;
          border-radius: 80%;
        }

        .userid {
          width: 100%;
          font-weight: bold;
          font-size: 12px;
          text-align: center;
          margin-top: 4px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
    }

      .comment_text {
        width: 92%;
        display: flex;
        flex-flow: column;
        justify-content: center;
        gap: 4px;

        .comment_detail {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap:8px;

          .date {
            font-size: 12px;
            color: #112d4e;
          
          }
      }

        .edit_delete {
          display: flex;
          justify-content: end;
          font-size: 12px;
          color: #112d4e;
          cursor: pointer;
          button{
            margin-left: 8px;
          }
      }
    }
  }
  .comment_list:not(:last-child) {
  border-bottom: 1px solid #dbe2ef;
}
`

export const CommentForm = styled.form`
  display: flex;
  margin: 20px auto;
  input {
        width: 90%;
        height: 60px;
        padding: 8px;
        border-top-left-radius: 15px;
        border-bottom-left-radius: 15px;
        border: 1px solid #dbe2ef;
      }

      button {
        width: 10%;
        height: 60px;
        background-color: white;
        border: 1px solid #dbe2ef;
        color: #112d4e;
        border-top-right-radius: 15px;
        border-bottom-right-radius: 15px;
        font-weight: bold;
        cursor: pointer;
      }

`

