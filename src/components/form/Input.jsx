import styled from 'styled-components';

export const Input = ({ type, id, value, onChange }) => {
  return <input type={type} id={id} value={value} onChange={onChange} />;
};
