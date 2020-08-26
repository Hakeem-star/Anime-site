import React from "react";
import { css } from "@emotion/core";
import { innerTitleContainerGeneralStyle } from "./styles/innerTitleStyles";

export default function AnimeRecommendations({ recommendations }) {
  console.log(recommendations);
  return (
    <div css={[innerTitleContainerGeneralStyle]}>
      {recommendations.map((anime, index) => {
        const image = anime.mediaRecommendation.coverImage.medium;
        const title = anime.mediaRecommendation.title.romaji;
        return (
          <div key={index}>
            <img src={image} alt={title} />
            <span>{title}</span>
          </div>
        );
      })}
    </div>
  );
}
