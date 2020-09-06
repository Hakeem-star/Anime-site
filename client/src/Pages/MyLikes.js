import React, { useEffect, useState } from "react";
import AnimeCardsList from "../components/AnimeCardsList";
import { Route } from "react-router-dom";
import getLikedAnimeData from "../utils/API/getLikedAnimeData";
import { getSeasonBGWallpaper } from "../utils/getSeasonBGWallpaper";

export default function MyLikes({
  setBgState,
  likedAnime,
  setRawSeasonData,
  seasonData,
}) {
  const [animeDataReadyState, setAnimeDataReadyState] = useState(false);

  useEffect(() => {
    //Set the background wallpaper
    setAnimeDataReadyState(false);
    setBgState(getSeasonBGWallpaper());
    console.log("likedAnime", likedAnime);
    //get the correct season on mount and use that to call the API
    if (likedAnime.length > 0) {
      getLikedAnimeData(setRawSeasonData, likedAnime, setAnimeDataReadyState);
    } else {
      setRawSeasonData([]);
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
