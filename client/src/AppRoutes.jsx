import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { isLoggedIn } from "./store/thunks/user";
import Nav from "./components/nav/Nav";
import Player from "./components/player/Player";
import App from "./components/app/App";
import Home from "./components/app/Home/Home";
import Artist from "./components/app/Artist/Artist";
import Playlist from "./components/app/Playlist/Playlist";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Profile from "./components/app/Profile/Profile";
import Search from "./components/app/Search/Search";
import LikedSongs from "./components/app/Playlist/LikedSongs";
import Reset from "./components/auth/Reset";
import Forgot from "./components/auth/Forgot";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Admin from "./components/admin/Admin";
import Loading from "./components/UI/Loading";

function AppRoutes() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(isLoggedIn());
  }, []);

  return (
    <BrowserRouter>
      {user.auth === true && (
        <main className="main">
          <Nav />

          {/* Components below should be re-viewed */}
          <App>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<Search />} />
              <Route path="/artist/:id" element={<Artist />} />
              <Route path="/playlist/:id" element={<Playlist />} />
              <Route path="/likedSongs" element={<LikedSongs />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </App>
          <Player />
        </main>
      )}

      {user.auth === false && (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgotPassword" element={<Forgot />} />
          <Route path="/resetPassword/:id" element={<Reset />} />
          <Route path="*" element={<Loading main={true} fullHeight={true} />} />
        </Routes>
      )}

      <ToastContainer
        theme="dark"
        closeOnClick
        style={{
          opacity: 0.8,
        }}
      />
    </BrowserRouter>
  );
}

export default AppRoutes;
