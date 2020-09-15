import React, { useState } from "react";
import { css } from "@emotion/core";

export default function FilterDropdown({ aggregatedGenres, filterByGenre }) {
  return (
    <div
      css={css`
        height: 300px;
        overflow-y: auto;
        overflow-x: hidden;

        div {
          margin: 10px;
          cursor: pointer;
          padding: 5px;
          :hover {
            background: yellow;
          }
        }
        ::-webkit-scrollbar {
          width: 10px;
          opacity: 0;
        }

        /* Handle */
        ::-webkit-scrollbar-thumb {
          background: #888;
        }
      `}
    >
      <div
        title="Clear Filter"
        onClick={() => {
          filterByGenre("None");
        }}
      >
        None
      </div>
      {aggregatedGenres.map((genre, index) => {
        return (
          <div
            title={genre}
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
