import React, { useState, useEffect, useContext } from "react";
import { css } from "@emotion/core";
import AnimeCardsList from "../components/AnimeCardsList";
import { Route, Redirect, useHistory } from "react-router-dom";
import getSeasonData from "../utils/API/getSeasonData";
import { getSeasonBGWallpaper } from "../utils/getSeasonBGWallpaper";
import { aggregateGenres } from "../utils/headerMethods";
import { seasonsHomePageContext } from "../App";

export default function Home() {
  const history = useHistory();

  const {
    setRawSeasonData,
    setBgState,
    setSeasonData,
    setAggregatedGenres,
    rawSeasonData,
    seasonData,
  } = useContext(seasonsHomePageContext);

  useEffect(() => {
    //get the correct season on mount and use that to call the API
    getSeasonData(setRawSeasonData);
    setBgState(getSeasonBGWallpaper());
  }, []);

  useEffect(() => {
    //Set up a listener to get the right season and use that to call the API
    history.listen((location) => {
      getSeasonData(setRawSeasonData);
      setBgState(getSeasonBGWallpaper(location));
    });
  }, [history]);

  useEffect(() => {
    //Whenever the raw data changes, update the season data so it's unfiltered
    setSeasonData(rawSeasonData);
    setAggregatedGenres(aggregateGenres(rawSeasonData));
  }, [rawSeasonData]);

  return (
    <>
      <AnimeCardsList seasonData={seasonData}></AnimeCardsList>
    </>
  );
}
