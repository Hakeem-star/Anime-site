import React, { useState, useEffect } from "react";
import { css } from "@emotion/core";
import Header from "../components/header";
import Background from "../components/Background";
import AnimeCardsList from "../components/AnimeCardsList";
import { Route, Redirect, useHistory } from "react-router-dom";
import getSeasonData from "../utils/API/getSeasonData";

export const seasonsHomePage = React.createContext();

export default function Home() {
  const [bgState, setBgState] = useState(
    "/src/images/masaaki-komori-Z8TQv3yKQd4-unsplash.jpg"
  );

  const [rawSeasonData, setRawSeasonData] = useState([]);
  const [seasonData, setSeasonData] = useState([]);
  const history = useHistory();

  useEffect(() => {
    //get the correct season on mount and use that to call the API
    getSeasonData(setRawSeasonData);
  }, []);

  useEffect(() => {
    //Set up a listener to get the right season and use that to call the API
    history.listen((location) => {
      getSeasonData(setRawSeasonData);
    });
  }, [history]);

  useEffect(() => {
    //Whenever the raw data changes, update the season data so it's unfiltered
    setSeasonData(rawSeasonData);
  }, [rawSeasonData]);

  return (
    <>
      <Route exact path="/">
        <Redirect to="/winter" />
      </Route>
      <Route
        path="/"
        render={() => (
          <>
            <Header setBgState={setBgState} />
            <section
              css={css`
                width: 85%;
                margin: 85px auto 0;
                position: relative;
                z-index: 1;
              `}
            >
              <seasonsHomePage.Provider
                value={{
                  setSeasonData,
                  rawSeasonData,
                }}
              >
                <AnimeCardsList seasonData={seasonData}></AnimeCardsList>
              </seasonsHomePage.Provider>
            </section>
            <Background bgState={bgState} />
          </>
        )}
      ></Route>
    </>
  );
}
