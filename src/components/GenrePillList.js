import React from "react";
import GenrePill from "./GenrePill";
import { css } from "@emotion/core";

const GenrePillListStyle = css`
  font-family: overpass;
  font-size: 0.9rem;
  position: absolute;
  bottom: 35px;
  left: 30px;
  width: 270px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 10px;
  justify-items: center;
`;

export default function GenrePillList({ genres }) {
  return (
    <div css={GenrePillListStyle}>
      {genres.map((genre) => (
        <GenrePill text={genre} />
      ))}
    </div>
  );
}
