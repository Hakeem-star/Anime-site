import React, { useState } from "react";
import { css } from "@emotion/core";

export default function SortDropdown({ sortAnimePage }) {
  const [sortDirection, setSortDirection] = useState("desc");

  function activeSortOrderStyle(value, sortDirection) {
    return sortDirection === value ? "yellow" : "transparent";
  }
  return (
    <div
      css={css`
        > div {
          margin: 10px;
          cursor: pointer;
          padding: 5px;
          :hover :not(.asc-desc) {
            background: yellow;
          }
        }
      `}
    >
      <div
        className="asc-desc"
        css={css`
          display: flex;
          flex-direction: row;
          border-bottom: 1px solid;
          div {
            margin-bottom: 5px;
            padding: 3px 10px;
          }
        `}
      >
        <div
          title="Ascending"
          onClick={() => {
            setSortDirection("asc");
          }}
          css={css`
            border-right: 1px solid;
            background: ${activeSortOrderStyle("asc", sortDirection)};
          `}
        >
          ASC
        </div>
        <div
          title="Decending"
          css={css`
            background: ${activeSortOrderStyle("desc", sortDirection)};
          `}
          onClick={() => {
            setSortDirection("desc");
          }}
        >
          DESC
        </div>
      </div>
      <div
        title="Name"
        onClick={(event) => {
          sortAnimePage(sortDirection, event.target.textContent);
        }}
      >
        Name
      </div>
      <div
        title="Popularity"
        onClick={(event) => {
          sortAnimePage(sortDirection, event.target.textContent);
        }}
      >
        Popularity
      </div>
      <div
        title="Score"
        onClick={(event) => {
          sortAnimePage(sortDirection, event.target.textContent);
        }}
      >
        Score
      </div>
    </div>
  );
}
