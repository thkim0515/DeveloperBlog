import Spinner from "react-bootstrap/Spinner";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

const CustomSpinner = styled(Spinner)`
  width: 4rem;
  height: 4rem;
  border-width: 0.7rem;
  border-right-color: transparent;
  width: 6rem;
  height: 6rem;
`;

export const BasicSpinner = () => {
  return <CustomSpinner animation="border" role="status" variant="light" />;
};
