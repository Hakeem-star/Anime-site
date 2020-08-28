import React, { useContext } from "react";
import { css } from "@emotion/core";
import { AnimeCardContext } from "./AnimeCard";
import AnimeCardGallery from "./AnimeCardGallery";
import AnimeRecommendations from "./AnimeRecommendations";
import AnimeAdditionalInfo from "./AnimeAdditionalInfo";

const titleContainerStyle = css`
  color: white;
  position: absolute;
  right: 0;
  margin-top: 20px;
  margin-right: 20px;
  top: 51px;
  padding: 10px 30px;
  border-radius: 5px;
  font-size: 1.1rem;
  z-index: 1;
  max-width: 320px;
  max-height: 100px;
  min-height: 1px;
  min-width: 1px;
  box-shadow: -3px 1px 5px 0px #65656552;
  background-color: #f9f9f9eb;
  color: rgb(110, 133, 158);
  font-family: "Overpass", sans-serif;
  font-weight: bold;
  font-size: 1.1rem;
  line-height: 1.2;
  transition: all 0.5s ease-out;
`;

export default function AnimeCardTitle() {
  const {
    title,
    imageHoverTitleStyles,
    openDiscussionStyles,
    galleryImages,
    additionalInfoData,
    additionalInfoVisibleState,
    galleryPageVisibleState,
    recommendationsPageVisibleState,
    recommendationsData,
  } = useContext(AnimeCardContext);

  function innerPageToDisplay() {
    //If we are viewing the gallery
    if (galleryPageVisibleState) {
      return galleryImages.gfycats ? (
        <AnimeCardGallery images={galleryImages.gfycats} />
      ) : null;
    }
    //If we are viewing the recommendations page
    else if (
      recommendationsPageVisibleState
      // recommendationsData.length > 0
    ) {
      return <AnimeRecommendations recommendations={recommendationsData} />;
    } else if (
      additionalInfoVisibleState &&
      Object.keys(additionalInfoData).length > 0
    ) {
      return <AnimeAdditionalInfo additionalInfoData={additionalInfoData} />;
    }
  }

  return (
    <div
      className="title-container"
      css={[titleContainerStyle, imageHoverTitleStyles, openDiscussionStyles]}
    >
      <div>
        <p>{title.english || title.romaji}</p>
      </div>
      {/* //discussion thread */}

      {/* If gyfcats are in the result */}
      {innerPageToDisplay()}
    </div>
  );
}