import React from "react";
import { css } from "@emotion/core";
import PropTypes from "prop-types";

const ratingsBlockContainerStyle = css`
  position: absolute;
  width: 100%;
  height: 4px;
  overflow: hidden;
`;

const ratingsBlockStyle = css`
  width: 100%;
  height: 25px;
  background: linear-gradient(to right, #33ff00, #33ff00);
  border-radius: 9px 9px 0 0;
  transition: all 0.8s ease;
`;

function processPotentialAverageScoreValues(averageScore) {
  if (averageScore === null) {
    return css`
      background: linear-gradient(to right, #33ff0000, #33ff0000);
    `;
  } else {
    return css`
      background: linear-gradient(
        to right,
        #33ff00 0%,
        #33ff00 ${averageScore}%,
        #ff0000 ${averageScore}% 100%
      );
    `;
  }
}

export default function RatingsBlock({ averageScore }) {
  return (
    <div css={ratingsBlockContainerStyle} className="ratings-container">
      <div
        css={[
          ratingsBlockStyle,
          processPotentialAverageScoreValues(averageScore),
        ]}
      ></div>
    </div>
  );
}

RatingsBlock.propTypes = {
  averageScore: PropTypes.number,
};
