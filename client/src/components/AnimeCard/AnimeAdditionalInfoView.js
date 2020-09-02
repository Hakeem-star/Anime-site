import React from "react";
import { innerTitleContainerGeneralStyle } from "./styles/innerTitleStyles";
import EpisodeContainer from "./EpisodeContainer";
import { css } from "@emotion/core";

function timestampToDate(timestamp) {
  let dt = new Date(timestamp * 1000);
  return {
    date: dt.toLocaleDateString(),
    time: `${dt.getHours()}:${dt.getMinutes()}`,
  };
}

export default function AnimeAdditionalInfoView({ additionalInfoData }) {
  return (
    <div css={innerTitleContainerGeneralStyle}>
      {additionalInfoData.nextAiringEpisode !== null ? (
        <div
          css={css`
            font-size: 0.9rem;
            margin-bottom: 30px;
          `}
        >
          <p>
            The next episode will be airing on{" "}
            {
              timestampToDate(additionalInfoData.nextAiringEpisode.airingAt)
                .date
            }{" "}
            at{" "}
            {
              timestampToDate(additionalInfoData.nextAiringEpisode.airingAt)
                .time
            }
          </p>
        </div>
      ) : null}
      <p
        css={css`
          font-size: 0.9rem;
          font-weight: 200;
        `}
      >
        Currently streaming episodes
      </p>
      <div
        css={css`
          display: flex;
          flex-wrap: wrap;
        `}
      >
        {additionalInfoData.streamingEpisodes.map((episode, index) => {
          return <EpisodeContainer key={index} episode={episode} />;
        })}
      </div>
    </div>
  );
}
