import "./LibraryLink.scss";
import { NavLink } from "react-router-dom";

const LibraryLink = ({
  isArtist = true,
  to,
  img,
  pinned = false,
  children,
}) => {
  return (
    <NavLink
      className={`library-link 
      ${isArtist ? "library-link--artist" : ""}`}
      to={to}
    >
      <img src={img} alt="Heart" />
      <div className="library-link__content">
        <span className="library-link__name">{children}</span>
        <span className="library-link__type">
          {pinned ? "📌 - " : null}
          {isArtist ? `Artist` : "Playlist"}
        </span>
      </div>
    </NavLink>
  );
};

export default LibraryLink;
