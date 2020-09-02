import React from "react";
import Home from "./Pages/Home";
import { Global, css } from "@emotion/core";
import GlobalStyle from "./styles/GlobalStyle";

export default function App() {
  return (
    <>
      <Global styles={GlobalStyle} />
      <Home></Home>
    </>
  );
}
