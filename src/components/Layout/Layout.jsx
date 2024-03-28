import { Header } from "./Header";
import { Outlet } from "react-router-dom";
import { SContainer } from "./Layout.style";

export const Layout = (props) => {
  return (
    <div>
      <Header />
      <SContainer>
        <Outlet />
      </SContainer>
    </div>
  );
};
