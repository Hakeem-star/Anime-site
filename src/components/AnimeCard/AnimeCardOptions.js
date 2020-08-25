import React, { useState, useContext } from "react";
import { BsChatDots } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { css } from "@emotion/core";
import { AnimeCardContext } from "./AnimeCard";

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
  const { setOpenDiscussionStyles } = useContext(AnimeCardContext);
  const [addedTocollection, setAddedTocollection] = useState(false);
  setOpenDiscussionStyles;
  return (
    <div
      css={css`
        position: absolute;
        right: 0;
        margin: 20px;
        display: grid;
        grid-gap: 10px;
        place-items: center;
        grid-auto-flow: column;
        cursor: pointer;
        z-index: 3;
      `}
    >
      <BsChatDots
        onClick={() => {
          setOpenDiscussionStyles((state) => {
            console.log(state);
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
        }}
      />
      {addedTocollection ? (
        <AiFillHeart
          css={css`
            width: 30px;
            height: 30px;
          `}
          onClick={() => {
            setAddedTocollection((state) => !state);
          }}
        />
      ) : (
        <div
          className="add-to-list-btn"
          css={addToListBtnStyle}
          onClick={() => {
            setAddedTocollection((state) => !state);
          }}
        ></div>
      )}
    </div>
  );
}
