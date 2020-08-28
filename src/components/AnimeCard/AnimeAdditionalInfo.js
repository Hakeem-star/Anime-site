import React from "react";
import { innerTitleContainerGeneralStyle } from "./styles/innerTitleStyles";
import StreamingEpisodes from "./StreamingEpisodes";

export default function AnimeAdditionalInfo({ additionalInfoData }) {
  return (
    <div css={innerTitleContainerGeneralStyle}>
      <div>
        {additionalInfoData.streamingEpisodes.map((episode, index) => {
          return <StreamingEpisodes key={index} episode={episode} />;
        })}
      </div>
    </div>
  );
}
