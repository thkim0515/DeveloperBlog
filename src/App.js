import { BrowserRouter, Routes, Route } from "react-router-dom";

//레이아웃
import { Layout } from "./components/Layout/Layout";
import { Join } from "./pages/Join/Join";

//페이지
import { Main } from "./pages/Main/Main";
import { Login } from "./pages/Join/Login/Login";
import { SignUp } from "./pages/Join/SignUp/SignUp";
import { CodeCreate } from "./pages/CodeCreate/CodeCreate";
import { PostDetail } from "./pages/PostDetail/PostDetail";
import { PostUpdate } from "./pages/PostUpdate/PostUpdate";
import { Profile } from "./pages/Profile/Profile";
import { ProfileEdit } from "./pages/ProfileEdit/ProfileEdit";
import { MyCodes } from "./pages/MyCodes/MyCodes";
import NotFound from "./pages/NotFound/NotFound";

//context
import { UserLoginProvider } from "./context/UserLoginContext";

export const App = () => {
  return (
    <BrowserRouter>
      <UserLoginProvider>
        <Routes>
          {/* 로그인 및 회원가입 페이지를 레이아웃 밖에 배치 */}
          <Route element={<Join />}>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Route>

          <Route element={<Layout />}>
            {/* Layout 컴포넌트 안에서 자식 Route들을 배치 */}
            <Route index element={<Main />} />
            <Route path="codeCreate" element={<CodeCreate />} />
            <Route path="post/:pid" element={<PostDetail />} />
            <Route path="postUpdate/:_id" element={<PostUpdate />} />
            <Route path="profile" element={<Profile />} />
            <Route path="profileEdit" element={<ProfileEdit />} />
            <Route path="myCodes" element={<MyCodes />} />
            <Route path="/*" element={<NotFound />} />
          </Route>
        </Routes>
      </UserLoginProvider>
    </BrowserRouter>
  );
};
