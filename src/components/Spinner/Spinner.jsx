import * as S from "./Spinner.style";
export const Spinner = ({ isLoading, children }) => {
  return (
    <>
      <S.Modal $show={isLoading}>
        <S.ModalContent>{children}</S.ModalContent>
      </S.Modal>
    </>
  );
};
