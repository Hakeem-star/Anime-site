import React from "react";
import { jsx, css } from "@emotion/core";
import GenrePill from "./GenrePill";
import GenrePillList from "./GenrePillList";
const imagePath = "src/images/reZero.jpg";

const AnimeCardStyle = css`
  width: 740px;
  height: 410px;
  position: relative;
  border: 1px solid #0000ff1a;
  border-radius: 10px;
  background: #f0f8ff59;
`;

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
`;

const genres = ["action", "adventure", "sports", "Isekai"];

export default function AnimeCard() {
  return (
    <div css={AnimeCardStyle}>
      <div css={ratingsBlockContainerStyle} className="ratings-container">
        <div css={ratingsBlockStyle}></div>
      </div>

      <div
        className="add-to-list"
        css={css`
          position: absolute;
          right: 0;
          margin: 20px;
          width: 30px;
          height: 30px;
          background-size: 52%;
          background-image: url("src/images/icons8-plus.svg");
          border-radius: 50%;
          background-color: #e8e8e8;
          background-position: center;
          background-repeat: no-repeat;
        `}
      ></div>

      <div
        className="title-container"
        css={css`
          color: white;
          position: absolute;
          right: 0;
          margin-top: 20px;
          margin-right: 20px;
          top: 51px;
          padding: 10px;
          border-radius: 5px;
          font-size: 1.1rem;
          z-index: 1;
          width: 320px;
          box-shadow: -3px 1px 5px 0px #65656552;
          background-color: #f9f9f9cf;
          color: rgb(110, 133, 158);
          font-family: "Overpass", sans-serif;
          font-weight: bold;
          font-size: 1.1rem;
          line-height: 1.2;
        `}
      >
        <p> Re:Zero kara Hajimeru Isekai Seikatsu 2nd Season</p>
        <div></div>
      </div>
      <div
        css={css`
          position: absolute;
          width: 360px;
          height: 270px;
          background-color: red;
          border-radius: 5px;
          margin: 20px;
          background-image: url(${imagePath});
          box-shadow: -3px 1px 11px 4px #65656552;
        `}
        className="image-card"
      ></div>
      <div
        css={css`
          position: absolute;
          width: 390px;
          height: 240px;
          background-color: #f9f9f9cf;
          border-radius: 5px;
          right: 0;
          bottom: 0;
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
        `}
        className="synopsis-card"
      >
        <p>
          The first cour of the second season of Re:Zero kara Hajimeru Isekai
          Seikatsu. Even after dying countless times, Subaru finally ended the
          threat of the White Whale and defeated the Witch Cult's Sin Archbishop
          representing sloth, Petelgeuse Romaneeconti. But only shortly after
          overcoming a tragic ending and reuniting with his beloved Emilia,
          Subaru learns that Rem has been erased from this world, having fallen
          victim to the White Whale's Fog of Elimination in the midst of
          Subaru's death loop. With the White Whale now gone, Subaru and Emilia
          are forced to confront a reality they never dreamed would happen.
        </p>
      </div>
      <GenrePillList genres={genres} />
    </div>
  );
}
