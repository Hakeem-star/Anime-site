import React, { useContext, useRef, useState } from "react";
import { jsx, css, keyframes } from "@emotion/core";
import { BiPlay } from "react-icons/bi";
import YouTube from "react-youtube";
import { AnimeCardContext } from "./AnimeCard";

const imageCardStyle = css`
  position: absolute;
  width: 360px;
  height: 270px;
  border-radius: 5px;
  margin: 20px;
  background-size: cover;
  box-shadow: -3px 1px 11px 4px #65656552;
  transition: width 0.8s ease-out, height 0.8s ease-out, margin 0.8s ease-out;
  overflow: hidden;
  cursor: pointer;
  @media (max-width: 640px) {
    /* Mobile */
    position: static;
    right: auto;
    margin: auto;
    margin-top: 20px;
  }
`;

export default function AnimeImageCard() {
  const {
    imageCardClickedSylesChange,
    imageCardHoverSylesChange,
    coverImage,
    imageCardHoverStyles,
    imageOverlayHoverStyles,
    trailer,
  } = useContext(AnimeCardContext);

  const youtubePlayerRef = useRef({});
  const [youtubePlayerVisible, setYoutubePlayerVisible] = useState(false);
  const [expandCardToContainer, setExpandCardToContainer] = useState(false);

  function clickedImageCardAnimation(e) {
    if (!expandCardToContainer) {
      //Listen for click off the card
      document.addEventListener(
        "click",
        () => {
          //remove focus specific styling
          imageCardClickedSylesChange().off();
          //Change state to indicate we are not focusing on the image anymore
          setExpandCardToContainer((state) => !state);
          //Pause the video
          youtubePlayerRef.current.pauseVideo();
        },
        { once: true }
      );
      //Add styles to relevent components so the card can go fullScreen
      imageCardClickedSylesChange().on();
    }
    setExpandCardToContainer((state) => !state);
  }

  return (
    <div
      onClick={clickedImageCardAnimation}
      onMouseEnter={() => {
        if (!expandCardToContainer) {
          imageCardHoverSylesChange().on();
        }
      }}
      onMouseLeave={() => {
        //set current styles
        if (!expandCardToContainer) {
          //set new styles
          imageCardHoverSylesChange().off();
        }
      }}
      css={[
        imageCardStyle,
        css`
          background-image: url(${coverImage.extraLarge});
        `,
        imageCardHoverStyles,
      ]}
      className="image-card"
    >
      <div
        onClick={() => {
          //Change inside to embeded youtube iframe
          setYoutubePlayerVisible(true);
        }}
        css={[
          css`
            width: 100%;
            height: 100%;
            background-color: #000000a1;
            opacity: 0;
            transition: all 0.8s ease;
            @media (max-width: 640px) {
              /* Mobile */
              opacity: 1;
              background-color: #00000000;
            }
          `,
          imageOverlayHoverStyles,
        ]}
      >
        {youtubePlayerVisible ? (
          <YouTube
            // onClick={() => {
            //   console.log("CLOCL");
            // }}
            videoId={trailer.id}
            opts={{
              width: "100%",
              height: "100%",
              playerVars: { autoplay: 1 },
            }}
            onReady={(event) => {
              youtubePlayerRef.current = event.target;
            }}
            onPlay={() => {
              //if the youtube card isn't expanded, expand it when video is played
              if (!expandCardToContainer) clickedImageCardAnimation();
            }}
          />
        ) : (
          <BiPlay
            css={css`
              opacity: 0.7;
              width: 100%;
              height: 100%;
            `}
          />
        )}
      </div>
    </div>
  );
}
