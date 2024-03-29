import { BrowserRouter, Routes, Route } from "react-router-dom";
//레이아웃
import { Layout } from "./components/Layout/Layout";

//페이지
import { Main } from "./pages/Main";
import { Login } from "./pages/Login/Login";
import { SignUp } from "./pages/SignUp/SignUp";
import { CodeCreate } from "./pages/CodeCreate";
import { PostDetail } from "./pages/PostDetail";
import { PostUpdate } from "./pages/PostUpdate";
import { Profile } from "./pages/Profile";
import { ProfileEdit } from "./pages/ProfileEdit";
import { MyCodes } from "./pages/MyCodes";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* 로그인 및 회원가입 페이지를 레이아웃 밖에 배치 */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route element={<Layout />}>
          {/* Layout 컴포넌트 안에서 자식 Route들을 배치 */}
          <Route index element={<Main />} />
          <Route path="codeCreate" element={<CodeCreate />} />
          <Route path="post/:pid" element={<PostDetail />} />
          <Route path="postUpdate" element={<PostUpdate />} />
          <Route path="profile" element={<Profile />} />
          <Route path="profileEdit" element={<ProfileEdit />} />
          <Route path="myCodes" element={<MyCodes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
