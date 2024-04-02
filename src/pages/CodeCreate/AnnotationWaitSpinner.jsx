import React from "react";
import * as S from "./AnnotationCodeComp.style";
import { CustomSpinner } from "./AnnotationWaitSpinner.style";

export const AnnotationWaitSpinner = ({ isLoading }) => {
  return (
    <>
      <S.Modal show={isLoading}>
        <S.ModalContent>
          <CustomSpinner
            animation="border"
            role="status"
            variant="light"
            style={{ width: "6rem", height: "6rem" }}
          />
        </S.ModalContent>
      </S.Modal>
    </>
  );
};
