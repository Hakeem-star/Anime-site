import React, { useContext, useEffect, useState } from "react";
import AnimeCardsList from "../components/AnimeCardsList";
import { Route } from "react-router-dom";
import getLikedAnimeData from "../utils/API/getLikedAnimeData";
import { getSeasonBGWallpaper } from "../utils/getSeasonBGWallpaper";
import { seasonsHomePageContext } from "../App";
import { aggregateGenres } from "../utils/headerMethods";

export default function MyLikes() {
  const [animeDataReadyState, setAnimeDataReadyState] = useState(false);
  const {
    setBgState,
    likedAnime,
    setRawSeasonData,
    seasonData,
    rawLikedSeasonData,
    setRawLikedSeasonData,
  } = useContext(seasonsHomePageContext);

  useEffect(() => {
    //Set Raw data to nothing so we don't show the raw data state from the main home page
    //The best way to do this would have been to have the header component inside this component
    setRawSeasonData([]);
  }, []);

  useEffect(() => {
    //Set the background wallpaper
    setAnimeDataReadyState(false);
    setBgState(getSeasonBGWallpaper());
    //get the correct season on mount and use that to call the API
    if (likedAnime.length > 0) {
      getLikedAnimeData(
        setRawLikedSeasonData,
        likedAnime,
        setAnimeDataReadyState
      );
    } else {
      setRawSeasonData([]);
    }
  }, [likedAnime]);

  useEffect(() => {
    //Whenever the Raw liked season data changes, update the default Raw data, so the header filters can use it
    setRawSeasonData(rawLikedSeasonData);
  }, [rawLikedSeasonData]);

  return (
    <div>
      <AnimeCardsList
        animeDataReadyState={animeDataReadyState}
        seasonData={seasonData}
        setAnimeDataReadyState={setAnimeDataReadyState}
      />
    </div>
  );
}
