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
  opacity:0
}
20%{
  opacity:1
}
90%{
  opacity:1
}
to   {
  transform:translateX(0%);
  opacity:0;

}
`;

export default function AnimeCardPlaceholder({ animeDataReadyState }) {
  //Styles
  return (
    <div
      css={[
        css`
          opacity: 0;
          position: absolute;
          top: 0;
          width: 100%;
          height: 100%;
          z-index: 100;
          background: white;
          pointer-events: none;
          overflow: hidden;
          transition: opacity 0.5s;
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

            //Fade out when animeData is ready
            animation: ${load} 1s cubic-bezier(0.4, 0, 0.2, 1) infinite both;
          }
        `,

        !animeDataReadyState
          ? css`
              opacity: 1;
            `
          : css`
              opacity: 0;
            `,
      ]}
    ></div>
  );
}
AnimeCardPlaceholder.propTypes = { animeDataReadyState: PropTypes.bool };
