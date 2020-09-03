const { css } = require("@emotion/core");

export const innerTitleContainerGeneralStyle = css`
  width: 92%;
  height: 86%;
  margin-top: 15px;
  overflow: auto;
  position: absolute;
  ::-webkit-scrollbar {
    width: 10px;
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
