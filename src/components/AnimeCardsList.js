import React from "react";
import AnimeCard from "./AnimeCard/AnimeCard";
import { css } from "@emotion/core";

export default function AnimeCardsList({ seasonData }) {
  return (
    <div
      css={css`
        display: grid;
        grid-template-columns: auto auto;
        @media (max-width: 1300px) {
          grid-template-columns: auto;
        }
        grid-template-rows: auto;
      `}
    >
      {seasonData.map((animeData) => {
        return <AnimeCard animeData={animeData} key={animeData.id} />;
      })}
    </div>
  );
}
