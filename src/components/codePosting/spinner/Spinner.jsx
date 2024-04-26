import React from "react";
import * as S from "../../../pages/CodeCreate/AnnotationCreatePost.style";
import { CustomSpinner } from "./Spinner.style";

export const Spinner = ({ isLoading }) => {
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
