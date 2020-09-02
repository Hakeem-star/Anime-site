import React from "react";
import { css } from "@emotion/core";
import PropTypes from "prop-types";

const PageBackgroundStyle = css`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-image: url("/src/images/masaaki-komori-Z8TQv3yKQd4-unsplash.jpg");
  background-size: cover;
  background-position: center;
  opacity: 0.4;
`;

Background.propTypes = {
  bgState: PropTypes.string,
};

export default function Background({ bgState }) {
  return (
    <div
      css={[
        PageBackgroundStyle,
        css`
          background-image: url(${bgState});
        `,
      ]}
      className="bg"
    ></div>
  );
}
