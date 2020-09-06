import React, { useContext, useEffect, useState } from "react";
import AnimeCardsList from "../components/AnimeCardsList";
import { Route } from "react-router-dom";
import getLikedAnimeData from "../utils/API/getLikedAnimeData";
import { getSeasonBGWallpaper } from "../utils/getSeasonBGWallpaper";
import { seasonsHomePageContext } from "../App";
import { aggregateGenres } from "../utils/headerMethods";

export default function MyLikes() {
  const [animeDataReadyState, setAnimeDataReadyState] = useState(false);
  const { setBgState, likedAnime, setRawSeasonData, seasonData } = useContext(
    seasonsHomePageContext
  );

  useEffect(() => {
    //Set the background wallpaper
    setAnimeDataReadyState(false);
    setBgState(getSeasonBGWallpaper());
    //get the correct season on mount and use that to call the API
    if (likedAnime.length > 0) {
      getLikedAnimeData(setRawSeasonData, likedAnime, setAnimeDataReadyState);
    } else {
      setRawSeasonData([]);
      setAnimeDataReadyState(true);
    }
  }, [likedAnime]);

  return (
    <Route
      path="/likes"
      render={() => (
        <div>
          <AnimeCardsList
            animeDataReadyState={animeDataReadyState}
            seasonData={seasonData}
          />
        </div>
      )}
    />
  );
}
