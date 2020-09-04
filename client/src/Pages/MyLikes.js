import React, { useEffect } from "react";
import AnimeCardsList from "../components/AnimeCardsList";
import { Route } from "react-router-dom";
import getLikedAnimeData from "../utils/API/getLikedAnimeData";

export default function MyLikes({ likedAnime, setRawSeasonData, seasonData }) {
  useEffect(() => {
    //get the correct season on mount and use that to call the API
    if (likedAnime.length > 0) {
      getLikedAnimeData(setRawSeasonData, likedAnime);
    } else {
      setRawSeasonData([]);
    }
  }, []);

  return (
    <Route
      path="/likes"
      render={() => (
        <div>
          <AnimeCardsList seasonData={seasonData} />
        </div>
      )}
    />
  );
}
