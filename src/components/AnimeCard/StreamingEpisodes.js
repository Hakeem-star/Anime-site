import React from "react";
import { css } from "@emotion/core";

export default function StreamingEpisodes({ episode }) {
  console.log(episode);
  const splitTitle = episode.title.split("-");
  const episodeNumberWritten = splitTitle[0].trim();
  const episodeTitle = splitTitle.slice(1).join("-");

  return (
    <div
      css={css`
        display: grid;
        grid-template-columns: 20% 1fr;
        grid-template-rows: 1fr 1fr;
        height: 25%;
        img {
          max-width: 100%;
          max-height: 100%;
        }
      `}
    >
      <div
        css={css`
          grid-row: 1/3;
          grid-column: 1/2;
        `}
      >
        <img src={episode.thumbnail} alt={episode.title} />
      </div>
      <div>{episodeNumberWritten}</div>
      <div>{episodeTitle}</div>
    </div>
  );
}
