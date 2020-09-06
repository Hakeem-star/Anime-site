import React, { useEffect, useRef } from "react";
import { css } from "@emotion/core";
import { BiSearchAlt } from "react-icons/bi";

export default function SearchInput({ searchAnimePage }) {
  const searchInput = useRef(null);
  useEffect(() => {
    //Focus on the input on mount
    searchInput.current.focus();
  }, []);
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
        ref={searchInput}
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
