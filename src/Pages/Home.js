import React, { useState, useEffect } from "react";
import { css } from "@emotion/core";
import Header from "../components/header";
import Background from "../components/Background";
import Axios from "axios";
import AnimeCardsList from "../components/AnimeCardsList";
import { Route, Redirect, useHistory } from "react-router-dom";

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
    const seasons = ["winter", "summer", "spring", "fall"];
    const seasonPath = window.location.pathname.split("/")[1].toUpperCase();
    const matchSeason = (season) => {
      return season.toUpperCase() === seasonPath;
    };
    if (seasons.some(matchSeason)) {
      Axios.get(`/api/seasons/${seasonPath}`)
        .then((res) => {
          console.log(res);
          setRawSeasonData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  useEffect(() => {
    //Set up a listener to get the right season and use that to call the API
    history.listen((location) => {
      const seasons = ["winter", "summer", "spring", "fall"];
      const seasonPath = window.location.pathname.split("/")[1].toUpperCase();
      const matchSeason = (season) => {
        return season.toUpperCase() === seasonPath;
      };
      if (seasons.some(matchSeason)) {
        Axios.get(`/api/seasons/${seasonPath}`)
          .then((res) => {
            setRawSeasonData(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  }, [history]);

  useEffect(() => {
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
