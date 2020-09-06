import React, { useState, useRef, useContext, useEffect } from "react";
import { jsx, css, keyframes } from "@emotion/core";
import PropTypes from "prop-types";

export const AnimeCardContext = React.createContext();

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
0% {
  opacity: 1;
}
100% {
  opacity: 0;
}
`;

const load = keyframes`
from {
  left: -150px;
}
to   {
  left: 100%;
}
`;

export default function AnimeCardPlaceholder({
  animeDataReadyState,
  cardIndex,
}) {
  //Styles
  return (
    <div
      css={[
        css`
          position: absolute;
          top: 0;
          width: 100%;
          height: 100%;
          z-index: 100;
          background: white;
          pointer-events: none;
          overflow: hidden;
          &::before {
            content: "";
            display: block;
            position: absolute;
            left: -150px;
            top: 0;
            height: 100%;
            width: 150px;
            background: linear-gradient(
              to right,
              transparent 0%,
              #e8e8e8 50%,
              transparent 100%
            );
             {
              /* using the card index to add a slight delay */
            }
            animation: ${load} 1s cubic-bezier(0.4, 0, 0.2, 1)
              ${cardIndex * 500}ms ${!animeDataReadyState ? "infinite" : 1};
          }
        `,

        !animeDataReadyState
          ? css`
              animation: ${fadeIn} 0.5s;
            `
          : css`
              animation: ${fadeOut} 0.3s forwards;
            `,
      ]}
    ></div>
  );
}
AnimeCardPlaceholder.propTypes = { animeDataReadyState: PropTypes.bool };
