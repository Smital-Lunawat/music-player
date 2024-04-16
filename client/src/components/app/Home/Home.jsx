import "./Home.scss";

import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import SquareList from "../../UI/SquareList";
import { useEffect, useState } from "react";
import axios from "../../../api/axios.js";

const Home = () => {
  const { id, followedArtists, likedPlaylists } = useSelector(
    (state) => state.user.data,
  );
  const [topSongs, setTopSongs] = useState([]);
<<<<<<< HEAD
  const [newReleases, setNewReleases] = useState([]);
=======
  const [newSongs, setNewSongs] = useState([]);
>>>>>>> 3ecb8773ae3da311b4c4ebbe51aa69155fa49a49

  // FIXME: Refactor and fix data lost on re-render
  useEffect(() => {
    const fetcher = async () => {
      const res = await axios.get(`/songs?sort=-plays&limit=5`);
      const res2 = await axios.get(`/songs?sort=-createdAt&limit=5`);

      setTopSongs(res.data.data.songs);
<<<<<<< HEAD
      setNewReleases(res2.data.data.songs);
=======
      setNewSongs(res2.data.data.songs);
>>>>>>> 3ecb8773ae3da311b4c4ebbe51aa69155fa49a49
    };

    fetcher();
  }, []);

  return (
    id && (
      <>
        <div className="home__img" />
        <div className="home">
          <h1 className="h1" onClick={() => toast.success("Wow crazy")}>
<<<<<<< HEAD
            Good evening, wanna listen some music !?
          </h1>

          <h2 className="h2">Top Songs</h2>
          <SquareList list={topSongs} type={"song"} />

          <h2 className="h2">New Releases</h2>
          <SquareList list={newReleases} type={"song"} />
=======
            Hey, wanna listen some music !?
          </h1>

          <h2 className="h2">Trending Songs</h2>
          <SquareList list={topSongs} type={"song"} />

          <h2 className="h2">New Songs</h2>
          <SquareList list={newSongs} type={"song"} />
>>>>>>> 3ecb8773ae3da311b4c4ebbe51aa69155fa49a49

          {followedArtists.length > 0 && (
            <>
              <h2 className="h2">Your favourite artists</h2>
              <SquareList
                list={followedArtists.slice(0, 5)}
                type='artist'
              />
            </>
          )}

          {likedPlaylists.length > 0 && (
            <>
              <h2 className="h2">Your favourite playlists</h2>
              <SquareList list={likedPlaylists.slice(0, 5)} type='playlist' />
            </>
          )}
        </div>
      </>
    )
  );
};

export default Home;
