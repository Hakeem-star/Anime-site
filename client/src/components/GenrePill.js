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
  color: black;
  line-height: 1.1;
  padding: 5px 10px;
  white-space: nowrap;
  cursor: pointer;
  border: 0;
`;

const hexToRgb = (hex) =>
  hex
    .replace(
      /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
      (m, r, g, b) => "#" + r + r + g + g + b + b
    )
    .substring(1)
    .match(/.{2}/g)
    .map((x) => parseInt(x, 16));

function setContrast(colour) {
  const rgb = hexToRgb(colour);
  // http://www.w3.org/TR/AERT#color-contrast
  const brightness = Math.round(
    (parseInt(rgb[0]) * 299 + parseInt(rgb[1]) * 587 + parseInt(rgb[2]) * 114) /
      1000
  );
  const textColour = brightness > 125 ? "black" : "white";
  return textColour;
}

export default function GenrePill({ text, colour, pillClick }) {
  return (
    <button
      title={`Filter page by ${text}`}
      // onClick={pillClick}
      css={[
        pillStyle,
        css`
          background-color: ${colour};
          color: ${colour ? setContrast(colour) : "white"};
        `,
      ]}
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
