import { FindId } from "./FindId";
import { FindPassword } from "./FindPassword";

export const FindAccount = ({ $active }) => {
  return <>{$active === "findId" ? <FindId /> : <FindPassword />}</>;
};
