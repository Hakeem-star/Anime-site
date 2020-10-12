import React, { useState, useEffect } from "react";
import Home from "./Pages/Home";
import { Global, css } from "@emotion/core";
import GlobalStyle from "./styles/GlobalStyle";
import { Route, Redirect, Switch } from "react-router-dom";
import Header from "./components/Header";
import {
  filterByGenre,
  sortAnimePage,
  searchAnimePage,
  aggregateGenres,
  filterByYear,
} from "./utils/headerMethods";
import Background from "./components/Background";
import MyLikes from "./Pages/MyLikes";

export const seasonsHomePageContext = React.createContext();

function currentSeason() {
  //Get the numeric value of the month and match it to a season
  const monthNumber = new Date().getMonth();
  if (monthNumber < 3) {
    return "winter";
  }
  if (monthNumber < 6) {
    return "spring";
  }
  if (monthNumber < 9) {
    return "summer";
  }
  return "fall";
}
export default function App() {
  const [bgState, setBgState] = useState(
    "/src/images/masaaki-komori-Z8TQv3yKQd4-unsplash.jpg"
  );

  const [rawSeasonData, setRawSeasonData] = useState([]);
  const [seasonData, setSeasonData] = useState([]);
  const [aggregatedGenres, setAggregatedGenres] = useState([]);
  const [likedAnime, setLikedAnime] = useState([]);
  const [selectedYear, setselectedYear] = useState(() =>
    new Date().getFullYear()
  );
  const [likedSelectedYear, setLikedSelectedYear] = useState("All");

  useEffect(() => {
    //Retrieve liked animes from storage on app mount
    const storedLikes = window.localStorage.getItem("likedAnime");
    if (!storedLikes) {
      window.localStorage.setItem("likedAnime", JSON.stringify(storedLikes));
    } else {
      setLikedAnime(JSON.parse(storedLikes));
    }
  }, []);

  useEffect(() => {
    //Set new likes anime array to storage when added or removed
    window.localStorage.setItem("likedAnime", JSON.stringify(likedAnime));
  }, [likedAnime]);

  useEffect(() => {
    //Whenever the raw data changes, update the season data so it's unfiltered
    setSeasonData(rawSeasonData);
    setAggregatedGenres(aggregateGenres(rawSeasonData));
  }, [rawSeasonData]);

  useEffect(() => {
    //Whenever we change pages between likes and seasons
    const seasonPath = (location || window.location).pathname.split("/")[1];
    console.log(likedSelectedYear, selectedYear);
    if (seasonPath === "likes") {
      filterByYear(likedSelectedYear, setSeasonData, rawSeasonData);
    } else {
      filterByYear(selectedYear, setSeasonData, rawSeasonData);
    }
  }, [location]);

  return (
    <>
      <Global styles={GlobalStyle} />
      <Route exact path="/">
        <Redirect to={`/${currentSeason()}`} />
      </Route>

      <Header
        selectedYear={selectedYear}
        setselectedYear={setselectedYear}
        likedSelectedYear={likedSelectedYear}
        setLikedSelectedYear={setLikedSelectedYear}
        aggregatedGenres={aggregatedGenres}
        filterByYear={(year) => {
          filterByYear(year, setSeasonData, rawSeasonData);
        }}
        filterByGenre={(genre) => {
          filterByGenre(genre, setSeasonData, rawSeasonData);
        }}
        sortAnimePage={(direction, value) => {
          sortAnimePage(direction, value, setSeasonData, rawSeasonData);
        }}
        searchAnimePage={(value) => {
          searchAnimePage(value, setSeasonData, rawSeasonData);
        }}
      />
      <seasonsHomePageContext.Provider
        value={{
          setRawSeasonData,
          setBgState,
          setSeasonData,
          setAggregatedGenres,
          rawSeasonData,
          seasonData,
          setLikedAnime,
          likedAnime,
          selectedYear,
        }}
      >
        <section
          css={css`
            width: 85%;
            margin: 185px auto 0;
            position: relative;
            z-index: 1;

            @media (max-width: 1300px) {
              /* Not Mobile */
              margin: 55px auto 0;
            }
          `}
        >
          <Switch>
            <Route
              path="/likes"
              render={() => (
                <MyLikes
                  setBgState={setBgState}
                  likedAnime={likedAnime}
                  setRawSeasonData={setRawSeasonData}
                  seasonData={seasonData}
                />
              )}
            />
            <Route path="/" render={() => <Home />} />
          </Switch>
        </section>
      </seasonsHomePageContext.Provider>

      <Background bgState={bgState} />
    </>
  );
}
