import React, { useContext } from "react";
import { jsx, css, keyframes } from "@emotion/core";
import { AnimeCardContext } from "./AnimeCard";

const synopsisCardStyle = css`
  position: absolute;
  max-width: 390px;
  width: 50%;
  height: 240px;
  background-color: #f9f9f9eb;
  border-radius: 5px;
  right: 0;
  top: 120px;
  margin: 20px;
  padding: 20px;
  display: grid;
  place-items: center;
  box-shadow: -3px 1px 11px 4px #65656552;
  color: rgb(110, 133, 158);
  font-family: overpass;
  font-weight: 400;
  font-size: 0.9rem;
  line-height: 1.2;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 10px;
    opacity: 0;
  }

  &:hover {
    ::-webkit-scrollbar-thumb {
      background: #888;
    }
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #8880;
  }
  transition: background 0.8s ease, transform 0.7s ease-out;

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  @media (max-width: 640px) {
    position: static;
    width: 90%;
    margin-left: 0;
    margin-left: auto;
    margin-right: auto;
    flex: 1;
  }
`;

export default function SynopsisCard() {
  const { imageHoverSynopsisStyles, description } = useContext(
    AnimeCardContext
  );
  return (
    <div css={[synopsisCardStyle, imageHoverSynopsisStyles]}>
      <div
        css={css`
          grid-column: 1/2;
          grid-row: 1/2;
        `}
        className="synopsis-card"
      >
        <p
          css={css`
            padding-bottom: 30px;
          `}
          dangerouslySetInnerHTML={{ __html: description }}
        ></p>
      </div>
    </div>
  );
}
