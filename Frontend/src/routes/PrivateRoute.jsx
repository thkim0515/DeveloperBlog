import { NotFound } from "../pages/NotFound/NotFound";
import { useUserLogin } from "../context/UserLoginContext";

export const PrivateRoute = ({ component }) => {
  const { isLogin } = useUserLogin();

  if (!isLogin) {
    return <NotFound />;
  }

  // JSX 형태로 렌더링
  return <>{component}</>;
};
