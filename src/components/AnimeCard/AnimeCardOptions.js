import React, { useState, useContext } from "react";
import { AiFillHeart } from "react-icons/ai";
import { IoMdImages, IoIosInformationCircle } from "react-icons/io";
import { RiHeartAddLine } from "react-icons/ri";
import { css } from "@emotion/core";
import { AnimeCardContext } from "./AnimeCard";
import { BiDirections } from "react-icons/bi";

const addToListBtnStyle = css`
  width: 30px;
  height: 30px;
  background-size: 52%;
  border-radius: 50%;
  background-image: url("src/images/icons8-plus.svg");
  background-color: #e8e8e8;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
`;

export default function AnimeCardOptions() {
  const {
    setOpenDiscussionStyles,
    setGalleryPageVisibleState,
    setRecommendationsPageVisibleState,
    galleryPageVisibleState,
    recommendationsPageVisibleState,
  } = useContext(AnimeCardContext);

  const [addedTocollection, setAddedTocollection] = useState(false);
  setOpenDiscussionStyles;
  return (
    <div
      css={css`
        position: absolute;
        right: 0;
        margin: 20px;
        display: grid;
        grid-gap: 20px;
        place-items: center;
        grid-auto-flow: column;
        cursor: pointer;
        z-index: 3;
        & > * {
          width: 20px;
          height: 20px;
        }
      `}
    >
      {/* Show us information about the anime */}
      <IoIosInformationCircle />
      <IoMdImages
        onClick={() => {
          //If the review pages are closed, open the expansion
          if (!recommendationsPageVisibleState) {
            //open this thing
            setOpenDiscussionStyles((state) => {
              return Object.keys(state).length === 0
                ? css`
                    width: 100%;
                    min-height: 100%;
                    min-width: 100%;
                    max-width: 100%;
                    max-height: 100%;
                    background-color: #f9f9f9;
                    margin: 0;
                    top: 0;
                    right: 0;
                  `
                : {};
            });
          }

          //Triggers request to server to get gallery info
          setGalleryPageVisibleState((state) => {
            //Make sure the review state is closed
            setRecommendationsPageVisibleState(false);
            return !state;
          });
        }}
      />
      <BiDirections
        onClick={() => {
          if (!galleryPageVisibleState) {
            //open this thing
            setOpenDiscussionStyles((state) => {
              return Object.keys(state).length === 0
                ? css`
                    width: 100%;
                    min-height: 100%;
                    min-width: 100%;
                    max-width: 100%;
                    max-height: 100%;
                    background-color: #f9f9f9;
                    margin: 0;
                    top: 0;
                    right: 0;
                  `
                : {};
            });
          }
          //Enable or disable the reviews
          setRecommendationsPageVisibleState((state) => {
            //Make sure the gallery state is closed
            setGalleryPageVisibleState(false);
            return !state;
          });
        }}
      />
      {addedTocollection ? (
        <AiFillHeart
          onClick={() => {
            setAddedTocollection((state) => !state);
          }}
        />
      ) : (
        <RiHeartAddLine
          onClick={() => {
            setAddedTocollection((state) => !state);
          }}
        />
        // <div
        //   className="add-to-list-btn"
        //   css={addToListBtnStyle}
        //   onClick={() => {
        //     setAddedTocollection((state) => !state);
        //   }}
        // ></div>
      )}
    </div>
  );
}
