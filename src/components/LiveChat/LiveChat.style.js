import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
`;

export const MessageList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0 0 20px 0;
`;

export const Message = styled.li`
  color: ${(props) => (props.isUserMessage ? "blue" : "black")};
  display: flex;
  justify-content: space-between;
  background: #f0f0f0;
  margin: 10px 0;
  padding: 10px;
  border-radius: 8px;
  line-height: 1.5;
`;

export const Timestamp = styled.span`
  font-size: 0.8em;
  color: #888;
  margin-left: auto;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #3f72af;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;
