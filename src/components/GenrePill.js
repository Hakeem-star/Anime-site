import React from "react";
import { css } from "@emotion/core";
//Needs to filter on click
const pillStyle = css`
  /* width: 80px; */
  height: max-content;
  text-align: center;
  background-color: hsl(240 100% 69% / 1);
  display: grid;
  place-items: center;
  border-radius: 10px;
  color: white;
  line-height: 1.1;
  padding: 5px 10px;
  white-space: nowrap;
  cursor: pointer;
`;

export default function GenrePill({ text, colorOveride }) {
  return <div css={[pillStyle, colorOveride]}>{text}</div>;
}
