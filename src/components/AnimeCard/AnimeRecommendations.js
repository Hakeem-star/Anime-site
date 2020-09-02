import React from "react";
import { css } from "@emotion/core";
import { innerTitleContainerGeneralStyle } from "./styles/innerTitleStyles";
import PropTypes from "prop-types";
import RecommendationsContainer from "./RecommendationsContainer";
export default function AnimeRecommendations({ recommendations }) {
  console.log(recommendations);
  return (
    <>
      <p
        css={css`
          font-size: 0.9rem;
          font-weight: 200;
          margin-top: 15px;
        `}
      >
        Recommendations
      </p>
      <div
        css={[
          innerTitleContainerGeneralStyle,
          css`
            display: flex;
            flex-wrap: wrap;
            height: 77%;
            margin-top: 0;
          `,
        ]}
      >
        {recommendations.map((anime, index) => {
          const image = anime.mediaRecommendation.coverImage.large;
          const title = anime.mediaRecommendation.title.romaji;
          const externalLinks = anime.mediaRecommendation.externalLinks;
          return (
            <RecommendationsContainer
              key={index}
              image={image}
              title={title}
              externalLinks={externalLinks}
            />
          );
        })}
      </div>
    </>
  );
}
AnimeRecommendations.propTypes = {
  recommendations: PropTypes.array,
};
