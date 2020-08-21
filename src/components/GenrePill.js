import React from "react";
import { css } from "@emotion/core";

const pillStyle = css`
  /* width: 80px; */
  height: 22px;
  background-color: hsl(240 100% 69% / 1);
  display: grid;
  place-items: center;
  border-radius: 10px;
  color: white;
  line-height: 1.1;
  padding: 0 15px;
`;

export default function GenrePill({ text, colorOveride }) {
  return <div css={[pillStyle, colorOveride]}>{text}</div>;
}
