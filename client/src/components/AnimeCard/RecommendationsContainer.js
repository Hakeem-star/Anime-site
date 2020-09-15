import React from "react";
import { css } from "@emotion/core";

export default function RecommendationsContainer({
  image,
  title,
  externalLinks,
}) {
  return (
    <div
      css={css`
        display: grid;
        grid-template-columns: 50% auto;
        grid-template-rows: auto 1fr;
        height: 60%;
        width: 45%;
        border: 1px solid rgb(110, 133, 158);
        border-radius: 7px;
        overflow: hidden;
        margin-right: auto;
        margin-top: 20px;
        box-shadow: 3px 3px 3px 0px #65656552;

        @media (max-width: 640px) {
          width: 90%;
          height: 180px;
        }
      `}
    >
      <div
        css={css`
          overflow: hidden;
          border-right: 1px solid;
          grid-row: 1/3;
          grid-column: 1/2;
          img {
            height: auto;
            width: 100%;
          }
          @media (max-width: 640px) {
            display: grid;
            place-content: center;
          }
        `}
      >
        <img src={image} alt={title} />
      </div>
      <div
        css={css`
          border-bottom: 1px solid;
          padding: 6px;
        `}
      >
        {title}
      </div>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          padding: 6px;
          font-size: 0.9rem;
          overflow: auto;
          ::-webkit-scrollbar {
            width: 10px;
            opacity: 0;
          }

          &:hover {
            ::-webkit-scrollbar-thumb {
              background: #888;
            }
          }
          /* Handle */
          ::-webkit-scrollbar-thumb {
            background: #8880;
          }

          a {
            margin-bottom: 10px;
          }
        `}
      >
        {externalLinks.length > 0 ? (
          externalLinks.map((value) => {
            return (
              <a key={value} href={value.url}>
                <p>{value.site}</p>
              </a>
            );
          })
        ) : (
          <p>No legal streams available</p>
        )}
      </div>
    </div>
  );
}
