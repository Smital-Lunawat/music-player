import "./Nav.scss";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  RiHome4Fill,
  RiHome4Line,
  RiMusicFill,
  RiMusicLine,
  RiSearchFill,
  RiSearchLine,
  RiUserFill,
  RiUserLine,
} from "react-icons/ri";
import Library from "./Library.jsx";

const Nav = () => {
  const { role } = useSelector((state) => state.user.data);

  return (
    <nav className="nav">
      <div className="nav__block">
        <NavLink to="/" className="nav__link">
          <RiHome4Line className="line" />
          <RiHome4Fill className="fill" />
          <span>Home</span>
        </NavLink>

        <NavLink to="/search" className="nav__link">
          <RiSearchLine className="line" />
          <RiSearchFill className="fill" />
          <span>Search</span>
        </NavLink>
      </div>

      <Library />

      <div className="nav__block">
        {role === "artist" && (
          <NavLink to="/admin" className="nav__link">
            <RiMusicLine className="line" />
            <RiMusicFill className="fill" />
            <span>Admin</span>
          </NavLink>
        )}

        <NavLink to="/profile" className="nav__link">
          <RiUserLine className="line" />
          <RiUserFill className="fill" />
          <span>Profile</span>
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
