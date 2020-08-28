import React from "react";
import { css } from "@emotion/core";
import PropTypes from "prop-types";

//Needs to filter on click
const pillStyle = css`
  /* width: 80px; */
  height: max-content;
  text-align: center;
  background-color: hsl(240 100% 69% / 1);
  display: grid;
  place-items: center;
  border-radius: 10px;
  color: white;
  line-height: 1.1;
  padding: 5px 10px;
  white-space: nowrap;
  cursor: pointer;
  border: 0;
`;

export default function GenrePill({ text, colorOveride, pillClick }) {
  return (
    <button
      title={`Filter page by ${text}`}
      onClick={pillClick}
      css={[pillStyle, colorOveride]}
    >
      {text}
    </button>
  );
}
GenrePill.propTypes = {
  text: PropTypes.string,
  colorOveride: PropTypes.object,
  pillClick: PropTypes.func,
};
