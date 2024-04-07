import React from "react";

import "./Library.scss";
import { RiAddFill, RiBook3Line } from "react-icons/ri";
import LibraryLink from "./LibraryLink.jsx";
import likedSongsImg from "../../img/likedSongs.jpeg";
import { useDispatch, useSelector } from "react-redux";
import { createPlaylist } from "../../store/thunks/user.js";

const Library = () => {
  const { id, likedPlaylists, followedArtists, playlists } = useSelector(
    (state) => state.user.data,
  );
  const dispatch = useDispatch();

  const isArtist = (el) => el.role === "artist";

  const handleCreatePlaylist = () => {
    dispatch(createPlaylist());
  };

  const saved = (list) =>
    list
      .sort((a, b) => (a.name > b.name ? 1 : -1))
      .map((item) => (
        <LibraryLink
          key={item.id}
          isArtist={isArtist(item)}
          to={(isArtist(item) ? "/artist/" : "/playlist/") + item.id}
          img={item.img}
        >
          {item.name}
        </LibraryLink>
      ));

  return (
    <div className="library">
      <div className="library__header">
        <RiBook3Line />
        <span>Library</span>
        <RiAddFill
          style={{ marginLeft: "auto", fontSize: 28, cursor: "pointer" }}
          onClick={handleCreatePlaylist}
        />
      </div>

      {id && (
        <div className="saved">
          <LibraryLink
            isArtist={false}
            to="/likedSongs"
            img={likedSongsImg}
            pinned={true}
          >
            Liked Songs
          </LibraryLink>

          {saved([...likedPlaylists, ...followedArtists, ...playlists])}
        </div>
      )}
    </div>
  );
};

export default Library;
