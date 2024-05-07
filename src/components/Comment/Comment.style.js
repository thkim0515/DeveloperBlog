import styled from "styled-components";

export const CommentAndFormBox = styled.div`
  width: 100%;
  h3 {
    font-weight: bold;
    font-size: 1.2rem;
    padding: 20px 0;
    color: #112d4e;
  }
`;

export const CommentBox = styled.div`
  margin: 0 auto 20px auto;
  background-color: #fff;
  border-radius: 12px;

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

    .comment_box {
      width: 92%;
      display: flex;
      align-items: center;

      .comment_detail_box {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .text_detail {
          width: 85%;

          textarea {
            width: 100%;
            outline: none;
            resize: none;
            border: 1px solid #dbe2ef;
            background-color: #f9f7f7;
            overflow: hidden;
          }

          div {
            word-break: break-all;
          }
        }
        .date {
          width: 100%;
          font-size: 12px;
        }

        .edit_delete {
          margin-top: 8px;
          display: flex;
          justify-content: end;
          font-size: 12px;
          color: #112d4e;
          cursor: pointer;
          button {
            margin-left: 8px;
          }
        }
      }
    }
  }
  .comment_list:not(:last-child) {
    border-bottom: 1px solid #dbe2ef;
  }
`;

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
`;
