import React, { useState, useEffect } from "react";
import { css } from "@emotion/core";
import Header from "../components/header";
import Background from "../components/Background";
import AnimeCardsList from "../components/AnimeCardsList";
import { Route, Redirect, useHistory } from "react-router-dom";
import getSeasonData from "../utils/API/getSeasonData";
import { getSeasonBGWallpaper } from "../utils/getSeasonBGWallpaper";

function aggregateGenres(data) {
  const genreSet = new Set();
  data.forEach((element) => {
    genreSet.add(...element.genres);
  });

  return Array.from(genreSet);
}

export const seasonsHomePage = React.createContext();

export default function Home() {
  const [bgState, setBgState] = useState(
    "/src/images/masaaki-komori-Z8TQv3yKQd4-unsplash.jpg"
  );

  const [rawSeasonData, setRawSeasonData] = useState([]);
  const [seasonData, setSeasonData] = useState([]);
  const [aggregatedGenres, setAggregatedGenres] = useState([]);

  const history = useHistory();

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

  function filterByGenre(genre) {
    if (genre === "None") {
      setSeasonData(rawSeasonData);
    } else {
      setSeasonData(
        rawSeasonData.filter((element) => {
          return element.genres.includes(genre);
        })
      );
    }
  }

  function sortAnimePage(direction, value) {
    function getCorrectObjectProperty(element) {
      if (value === "Name") {
        return element.title.english
          ? element.title.english.toLowerCase()
          : element.title.romaji.toLowerCase();
      }
      if (value === "Popularity") {
        return element.popularity;
      }
      if (value === "Score") {
        return element.averageScore;
      }
    }

    let sortedArray = rawSeasonData
      .slice()
      .sort((firstElement, secondElement) => {
        if (
          getCorrectObjectProperty(firstElement) <
          getCorrectObjectProperty(secondElement)
        ) {
          return -1;
        }
        if (
          getCorrectObjectProperty(firstElement) >
          getCorrectObjectProperty(secondElement)
        ) {
          return 1;
        }
        return 0;
      });

    if (direction === "desc") {
      sortedArray.reverse();
    }
    setSeasonData(sortedArray);
  }

  function searchAnimePage(value) {
    setSeasonData(
      rawSeasonData.filter((element) => {
        const title = element.title.english
          ? element.title.english.toLowerCase()
          : element.title.romaji.toLowerCase();
        return title.includes(value);
      })
    );
  }

  return (
    <>
      <Route exact path="/">
        <Redirect to="/winter" />
      </Route>
      <Route
        path="/"
        render={() => (
          <>
            <Header
              aggregatedGenres={aggregatedGenres}
              setBgState={setBgState}
              filterByGenre={filterByGenre}
              sortAnimePage={sortAnimePage}
              searchAnimePage={searchAnimePage}
            />
            <section
              css={css`
                width: 85%;
                margin: 185px auto 0;
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
