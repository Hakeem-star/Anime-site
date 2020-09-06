const { css } = require("@emotion/core");

export const innerTitleContainerGeneralStyle = css`
  width: 90%;
  height: 86%;
  margin-top: 15px;
  overflow: auto;
  position: absolute;
  padding-bottom: 50px;
  ::-webkit-scrollbar {
    width: 10px;
    position: absolute;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #555;
  }
  @media (max-width: 640px) {
    position: static;
    width: 100%;
  }
`;
