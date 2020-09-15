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
  transform:translateX(-100%);
}
90%{
  opacity:1
}
to   {
  transform:translateX(0%);
  opacity:0;

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
            top: 0;
            height: 100%;
            width: 100%;
            background: linear-gradient(
              to right,
              transparent 0%,
              #e8e8e8 70%,
              transparent 100%
            );
             {
              /* using the card index to add a slight delay */
            }
            //Fade out when animeData is ready
            ${!animeDataReadyState
              ? css`
                  animation: ${load} 1s cubic-bezier(0.4, 0, 0.2, 1)
                    ${!animeDataReadyState ? "infinite" : 1} forwards;
                `
              : css`
                  animation: ${fadeOut} 0.5s forwards 0.5s;
                `}
          }
        `,

        !animeDataReadyState
          ? css`
              animation: ${fadeIn} 0.5s;
            `
          : css`
              animation: ${fadeOut} 0.5s forwards 0.5s;
            `,
      ]}
    ></div>
  );
}
AnimeCardPlaceholder.propTypes = { animeDataReadyState: PropTypes.bool };
