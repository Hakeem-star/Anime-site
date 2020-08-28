import React from "react";
import { css } from "@emotion/core";
import { innerTitleContainerGeneralStyle } from "./styles/innerTitleStyles";
import PropTypes from "prop-types";

export default function AnimeCardGallery({ images }) {
  function filteredImages(images) {
    console.log(images);
    return images.filter((image) => {
      return (
        image.tags &&
        image.tags.some((tag) => {
          return tag.toLowerCase().includes("anim");
        })
      );
    });
  }

  return (
    <div
      css={[
        innerTitleContainerGeneralStyle,
        css`
          display: flex;
          flex-wrap: wrap;
          div {
            width: 25%;
            height: 40%;
            margin: 10px;
            flex-grow: 1;
            align-self: center;
            display: grid;
            place-items: center;
            img {
              max-width: 100%;
              max-height: 100%;
              height: 100%;
            }
          }
        `,
      ]}
    >
      {images.map((element, index) => {
        return (
          <div key={index}>
            <img src={`${element.gif100px}`} />
          </div>
        );
      })}
    </div>
  );
}
AnimeCardGallery.propTypes = {
  images: PropTypes.array,
};
