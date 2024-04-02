import styled from 'styled-components';

export const Label = ({ propFor, text }) => {
  return <label htmlFor={propFor}>{text}</label>;
};
