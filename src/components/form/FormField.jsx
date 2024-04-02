import styled from 'styled-components';

export const FormField = ({
  labelText,
  inputType,
  propId,
  value,
  onChange,
}) => {
  return (
    <FieldBox>
      <label htmlFor={propId}>{labelText}</label>
      <input type={inputType} id={propId} value={value} onChange={onChange} />
    </FieldBox>
  );
};

const FieldBox = styled.div`
  display: flex;
  justify-content: space-between;

  label {
    padding: 0.7rem 0;
  }

  input[type='text'],
  input[type='password'] {
    width: 76%;
    padding: 0.7rem;
    margin-bottom: 0.7rem;
    border: 1px solid #000000;
    border-radius: 20px;
    resize: vertical;
  }
`;
