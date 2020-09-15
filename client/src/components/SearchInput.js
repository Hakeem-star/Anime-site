import React, { useEffect, useRef } from "react";
import { css } from "@emotion/core";
import PropTypes from "prop-types";

export default function SearchInput({
  searchAnimePage,
  currentSearch,
  setCurrentSearch,
}) {
  const searchInput = useRef(null);
  useEffect(() => {
    //Focus on the input on mount
    searchInput.current.focus();
    searchInput.current.value = currentSearch;
  }, [currentSearch]);
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
          setCurrentSearch(event.target.value);
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
SearchInput.propTypes = {
  searchAnimePage: PropTypes.func,
  currentSearch: PropTypes.string,
  setCurrentSearch: PropTypes.func,
};
