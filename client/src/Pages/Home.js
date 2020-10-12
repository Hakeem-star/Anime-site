import React, { useEffect, useContext, useState } from "react";
import AnimeCardsList from "../components/AnimeCardsList";
import { useLocation } from "react-router-dom";
import getSeasonData from "../utils/API/getSeasonData";
import { getSeasonBGWallpaper } from "../utils/getSeasonBGWallpaper";
import { seasonsHomePageContext } from "../App";

export default function Home() {
  const location = useLocation();

  //No season data yet. Signal to card to show placeholder
  const [animeDataReadyState, setAnimeDataReadyState] = useState(false);

  const { setRawSeasonData, setBgState, seasonData, selectedYear } = useContext(
    seasonsHomePageContext
  );

  useEffect(() => {
    //Page has changed so the data isn't ready yet
    setAnimeDataReadyState(false);
    //Set up a listener to get the right season and use that to call the API. Once complete change animeDataReadyState to true
    getSeasonData(selectedYear, setRawSeasonData);
    setBgState(getSeasonBGWallpaper(location));
    //Fetch new data when the selected year or page changes
    //This might need to be more restrictive to prevent it being triggered by irrelevent page changes
  }, [location, selectedYear]);

  // useEffect(() => {
  //   setAnimeDataReadyState(true);
  // }, [seasonData, animeDataReadyState]);

  return (
    <>
      <AnimeCardsList
        animeDataReadyState={animeDataReadyState}
        seasonData={seasonData}
        setAnimeDataReadyState={setAnimeDataReadyState}
      ></AnimeCardsList>
    </>
  );
}
