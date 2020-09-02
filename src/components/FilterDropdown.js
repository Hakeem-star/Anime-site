import React from "react";
import { css } from "@emotion/core";

export default function FilterDropdown({ aggregatedGenres, filterByGenre }) {
  return (
    <div
      css={css`
        width: 100px;
        div {
          margin: 10px;
          cursor: pointer;
          padding: 5px;
          :hover {
            background: yellow;
          }
        }
      `}
    >
      <div
        onClick={() => {
          filterByGenre("None");
        }}
      >
        None
      </div>
      {aggregatedGenres.map((genre, index) => {
        return (
          <div
            key={index}
            onClick={() => {
              filterByGenre(genre);
            }}
          >
            {genre}
          </div>
        );
      })}
    </div>
  );
}
