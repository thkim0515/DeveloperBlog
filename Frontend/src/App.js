import { BrowserRouter, Routes, Route } from "react-router-dom";

//레이아웃
import { Layout } from "./components/Layout/Layout";
import { Join } from "./pages/Join/Join";

//페이지
import { Main } from "./pages/Main/Main";
import { Login } from "./pages/Join/Login/Login";
import { EmailCheck } from "./pages/Join/SignUp/EmailCheck";
import { SignUp } from "./pages/Join/SignUp/SignUp";
import { Blog } from "./pages/Blog/Blog";
import { CodeCreate } from "./pages/CodeCreate/CodeCreate";
import { PostDetail } from "./pages/PostDetail/PostDetail";
import { PostUpdate } from "./pages/PostUpdate/PostUpdate";
import { Profile } from "./pages/Profile/Profile";
import { MyPage } from "./pages/MyPage/MyPage";
import { ProfileInfo } from "./pages/MyPage/ProfileInfo";
import { PasswordAndUserOut } from "./pages/MyPage/PasswordAndUserOut";
import { Notifications } from "./pages/MyPage/Notifications";
import { MyProfile } from "./pages/MyProfile/MyProfile";
import { Project } from "./pages/Project/Project";
import { ProjectDetail } from "./pages/ProjectDetail/ProjectDetail";
import { ProjectCreate } from "./pages/ProjectCreate/ProjectCreate";
import { ProjectEdit } from "./pages/ProjectEdit/ProjectEdit";
import { NotFound } from "./pages/NotFound/NotFound";

//context
import { UserLoginProvider } from "./context/UserLoginContext";

//privateRoute
import { PrivateRoute } from "./routes/PrivateRoute";

export const App = () => {
  return (
    <BrowserRouter>
      <UserLoginProvider>
        <Routes>
          {/* 로그인 및 회원가입 페이지를 레이아웃 밖에 배치 */}
          <Route element={<Join />}>
            <Route path="/login" element={<Login />} />
            <Route path="/emailcheck" element={<EmailCheck />} />
            <Route path="/signup" element={<SignUp />} />
          </Route>

          <Route element={<Layout />}>
            {/* Layout 컴포넌트 안에서 자식 Route들을 배치 */}
            <Route path="/" element={<Main />} />

            {/* blog */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/post-create" element={<PrivateRoute component={<CodeCreate />} />} />
            <Route path="/post/:_id" element={<PostDetail />} />
            <Route path="/post-update/:_id" element={<PrivateRoute component={<PostUpdate />} />} />

            {/* project */}
            <Route path="/project" element={<Project />} />
            <Route path="/project/:_id" element={<ProjectDetail />} />
            <Route path="/project-create" element={<PrivateRoute component={<ProjectCreate />} />} />
            <Route path="/project-edit/:_id" element={<PrivateRoute component={<ProjectEdit />} />} />

            {/* MyPage */}
            <Route path="/mypage" element={<MyPage />}>
              <Route index path="info" element={<ProfileInfo />} />
              <Route path="password" element={<PasswordAndUserOut />} />
              <Route path="notifications" element={<Notifications />} />
            </Route>

            {/* Profile */}
            <Route path="/profile/:nickname" element={<Profile />} />
            <Route path="/myProfile" element={<PrivateRoute component={<MyProfile />} />} />

            {/* NotFound */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </UserLoginProvider>
    </BrowserRouter>
  );
};
