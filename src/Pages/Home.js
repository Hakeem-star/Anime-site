import React, { useState, useEffect } from "react";
import { jsx, css } from "@emotion/core";
import AnimeCard from "../components/AnimeCard";
import Header from "../components/header";
import Background from "../components/Background";
import Axios from "axios";
import { getSeasonData } from "../utils/API/AnilistGraphQL/graphQLQueries";
import AnimeCardsList from "../components/AnimeCardsList";

export default function Home() {
  const [bgState, setBgState] = useState(
    "/src/images/masaaki-komori-Z8TQv3yKQd4-unsplash.jpg"
  );
  const [seasonData, setSeasonData] = useState([]);
  useEffect(() => {
    (async function getSeasonDataCover() {
      const seasonData = await getSeasonData("WINTER");
      setSeasonData(seasonData.data.data.Page.media);
      console.log(seasonData.data.data.Page.media);
    })();
  }, []);

  return (
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
  );
}
