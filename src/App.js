import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//레이아웃
import { Layout } from "./components/Layout/Layout";
import { Join } from "./pages/Join/Join";

//페이지
import { Main } from "./pages/Main";
import { Login } from "./pages/Join/Login/Login";
import { SignUp } from "./pages/Join/SignUp/SignUp";
import { CodeCreate } from "./pages/CodeCreate/CodeCreate";
import { PostDetail } from "./pages/PostDetail/PostDetail";
import { PostUpdate } from "./pages/PostUpdate/PostUpdate";
import { Profile } from "./pages/Profile/Profile";
import { ProfileEdit } from "./pages/ProfileEdit/ProfileEdit";
import { MyCodes } from "./pages/MyCodes/MyCodes";
import { NotFound } from "./pages/NotFound/NotFound";
import { TeamProject } from "./pages/TeamProject/TeamProject";
import { TeamProjectDetail } from "./pages/TeamProjectDetail/TeamProjectDetail";

//context
import { UserLoginProvider } from "./context/UserLoginContext";

//privateRoute
import { PrivateRoute } from "./routes/PrivateRoute";
import { NewCodePosting } from "./pages/TestComponent/NewCodePosting/NewCodePosting";
import { TeamProjectCreate } from "./pages/TeamProjectCreate/TeamProjectCreate";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
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

              {/* Code Posting */}
              <Route
                path="codeCreate"
                element={<PrivateRoute component={<CodeCreate />} />}
              />
              <Route path="post/:_id" element={<PostDetail />} />
              <Route
                path="codePosting"
                element={<PrivateRoute component={<NewCodePosting />} />}
              />
              <Route
                path="postUpdate/:_id"
                element={<PrivateRoute component={<PostUpdate />} />}
              />

              {/* Team Project */}
              <Route path="/teamProject" element={<TeamProject />} />
              <Route path="/project/:_pid" element={<TeamProjectDetail />} />
              <Route path="/projectCreate" element={<TeamProjectCreate />} />

              {/* Profile */}
              <Route
                path="profile"
                element={<PrivateRoute component={<Profile />} />}
              />
              <Route
                path="profileEdit"
                element={<PrivateRoute component={<ProfileEdit />} />}
              />
              <Route
                path="myCodes"
                element={<PrivateRoute component={<MyCodes />} />}
              />

              {/* NotFound */}
              <Route path="/*" element={<NotFound />} />
            </Route>
          </Routes>
        </UserLoginProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
};
