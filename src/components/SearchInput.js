import React, { useState } from "react";
import { css } from "@emotion/core";
import { BiSearchAlt } from "react-icons/bi";

export default function SearchInput({ searchAnimePage }) {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: row;
        height: 30px;
        width: 210px;
      `}
    >
      <input
        onChange={(event) => {
          searchAnimePage(event.target.value);
        }}
        css={css`
          width: 200px;
          height: 30px;
          flex: 1;
          font-family: overpass;
        `}
        placeholder="Enter Anime here..."
        type="text"
      />
    </div>
  );
}
