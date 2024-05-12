import React from "react";
import * as S from "./Spinner.style";
import { CustomSpinner } from "./Spinner.style";
import { HamsterSpinner } from "./HamsterSpinner";
export const Spinner = ({ isLoading }) => {
  return (
    <>
      <S.Modal $show={isLoading}>
        <S.ModalContent>
          <HamsterSpinner />
          {/* <CustomSpinner
            animation="border"
            role="status"
            variant="light"
            style={{ width: "6rem", height: "6rem" }}
          />*/}
        </S.ModalContent>
      </S.Modal>
    </>
  );
};
