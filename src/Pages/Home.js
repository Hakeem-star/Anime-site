import React, { useState, useEffect } from "react";
import { jsx, css } from "@emotion/core";
import AnimeCard from "../components/AnimeCard";
import Header from "../components/header";
import Background from "../components/Background";
import Axios from "axios";
import AnimeCardsList from "../components/AnimeCardsList";
import { Route, Redirect, BrowserRouter as Router } from "react-router-dom";

export default function Home() {
  const [bgState, setBgState] = useState(
    "/src/images/masaaki-komori-Z8TQv3yKQd4-unsplash.jpg"
  );
  const [seasonData, setSeasonData] = useState([]);
  useEffect(() => {
    Axios.get("/api/seasons/WINTER")
      .then((res) => {
        setSeasonData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Router>
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
                margin: 170px auto 0;
                position: relative;
                z-index: 1;
              `}
            >
              <AnimeCardsList seasonData={seasonData}></AnimeCardsList>
            </section>
            <Background bgState={bgState} />
          </>
        )}
      ></Route>
    </Router>
  );
}
