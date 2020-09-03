import React from "react";
import { css } from "@emotion/core";
import { SiCrunchyroll } from "react-icons/si";

export default function EpisodeContainer({ episode }) {
  const splitTitle = episode.title.split("-");
  const episodeNumberWritten = splitTitle[0].trim();
  const episodeTitle = splitTitle.slice(1).join("-");

  return (
    <div
      css={css`
        display: grid;
        grid-template-columns: 50% auto;
        grid-template-rows: 1fr 1fr;
        height: 125px;
        width: 45%;
        border: 1px solid rgb(110, 133, 158);
        border-radius: 7px;
        overflow: hidden;
        margin-right: auto;
        margin-top: 20px;
        box-shadow: 3px 3px 3px 0px #65656552;
        transition: box-shadow 0.3s ease;

        @media (max-width: 640px) {
          width: 90%;
        }
        img {
          max-height: 100%;
          transition: transform 0.3s ease;
        }

        :hover {
          box-shadow: 7px 7px 3px 0px #65656552;
          img {
            transform: scale(1.1);
          }
        }
      `}
    >
      <div
        css={css`
          position: relative;
          overflow: hidden;
          border-right: 1px solid;
          grid-row: 1/3;
          grid-column: 1/2;

          .episode-container__crunchyRoll-play-icon {
            opacity: 1;
          }
        `}
      >
        <SiCrunchyroll
          className="episode-container__crunchyRoll-play-icon "
          css={css`
            position: absolute;
            margin: 10px;
            pointer-events: none;
            color: #f47521;
            z-index: 1;
          `}
        />
        <a href={episode.url} target="_blank" rel="noreferrer">
          <img src={episode.thumbnail} alt={episode.title} />
        </a>
      </div>
      <div
        css={css`
          border-bottom: 1px solid;
          padding: 6px;
        `}
      >
        {episodeNumberWritten}
      </div>
      <div
        css={css`
          padding: 6px;
          font-size: 0.9rem;
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
        `}
      >
        {episodeTitle}
      </div>
    </div>
  );
}
