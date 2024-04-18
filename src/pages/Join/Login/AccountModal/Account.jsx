import { useState } from "react";
import { LoginModalContext } from "../../../../context/LoginModalContext";
import { FindId } from "./FindId";
import { FindPassword } from "./FindPassword";

export const Account = ({ active }) => {
  const [isSendEmail, setIsSendEmail] = useState(false);
  return (
    <LoginModalContext value={{ isSendEmail, setIsSendEmail }}>
      {active === "findId" ? <FindId /> : <FindPassword />}
    </LoginModalContext>
  );
};
