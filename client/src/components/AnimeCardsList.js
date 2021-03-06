import React, { useEffect, useState, useRef } from "react";
import AnimeCard from "./AnimeCard/AnimeCard";
import { css } from "@emotion/core";

export default function AnimeCardsList({
  seasonData,
  animeDataReadyState,
  setAnimeDataReadyState,
}) {
  //Create dummy data so we get placeholders when the page loads/refreshes if the data isn't ready
  const [seasonDataContainer, setSeasonDataContainer] = useState(
    Array(4).fill({})
  );

  //Ref to emsure we are on the second initialisation of this component
  const initial = useRef(null);

  useEffect(() => {
    initial.current && setSeasonDataContainer(seasonData);
  }, [seasonData]);

  initial.current = true;
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
      {seasonDataContainer.map((animeData, index) => {
        return (
          <AnimeCard
            setAnimeDataReadyState={setAnimeDataReadyState}
            cardIndex={index}
            animeDataReadyState={animeDataReadyState}
            animeData={animeData}
            key={animeData.id || index}
          />
        );
      })}
    </div>
  );
}
