import { NotFound } from "../pages/NotFound/NotFound";
import { useUserLogin } from "../context/UserLoginContext";

export const PrivateRoute = ({component: Component }) => {

  const {isLogin} = useUserLogin();

  if (!isLogin) {
    return <NotFound />;
  }

  return Component;
};
