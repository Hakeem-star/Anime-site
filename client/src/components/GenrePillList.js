import React, { useContext } from "react";
import GenrePill from "./GenrePill";
import { css } from "@emotion/core";
import PropTypes from "prop-types";
import filterSeasonData from "../utils/filterSeasonData";
import { seasonsHomePageContext } from "../App";

const GenrePillListStyle = css`
  font-family: overpass;
  font-size: 0.9rem;
  position: absolute;
  height: 70px;
  bottom: 35px;
  left: 20px;
  width: 38%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 10px;
  // justify-items: center;
  align-items: center;
  transition: transform 0.8s ease;
  @media (max-width: 640px) {
    /* Mobile */
    position: static;
    width: 100%;
    padding: 10px;
    grid-template-columns: auto auto auto;
    grid-template-rows: minmax(0px, auto);
    margin-top: auto;
    margin-bottom: 20px;
    height: auto;
  }
`;

export default function GenrePillList({ genres, colour, addCss }) {
  const { setSeasonData, rawSeasonData } = useContext(seasonsHomePageContext);
  const maximumGenres = genres.length > 4 ? genres.slice(0, 6) : genres;
  return (
    <div css={[GenrePillListStyle, addCss]}>
      {maximumGenres.map((genre) => (
        <GenrePill
          pillClick={() => {
            filterSeasonData(genre, setSeasonData, rawSeasonData);
          }}
          colour={colour}
          key={genre}
          text={genre}
        />
      ))}
    </div>
  );
}

GenrePillList.propTypes = {
  genres: PropTypes.array,
  colour: PropTypes.string,
  addCss: PropTypes.object,
};
