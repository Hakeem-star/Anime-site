import React, { useState } from "react";
import { jsx, css } from "@emotion/core";
import AnimeCard from "../components/AnimeCard";

const homeStyle = css`
  color: red;
  font-size: 50px;
  width: 100%;
  height: 100px;
  z-index: 1;
  position: relative;
  display: grid;
  place-content: center;
  .nav {
    display: flex;
    width: 370px;
    margin: auto;
    justify-content: space-between;
    font-family: overpass;
    font-size: 1.4rem;
    a {
      text-decoration: none;
    }
    a:visited {
      color: black;
    }
    .winter:hover {
      color: #79d0f2;
    }
    .spring:hover {
      color: #add90d;
    }
    .summer:hover {
      color: #f2bf27;
    }
    .fall:hover {
      color: #f27d16;
    }
  }
`;
const bg = css`
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-image: url("/src/images/masaaki-komori-Z8TQv3yKQd4-unsplash.jpg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
`;
export default function Home() {
  const [bgState, setBgState] = useState(
    "/src/images/masaaki-komori-Z8TQv3yKQd4-unsplash.jpg"
  );
  return (
    <>
      <header css={homeStyle}>
        <ul className="nav">
          <li>
            <a
              onClick={(e) => {
                setBgState(
                  "/src/images/gabriel-alenius-USXfF_ONUGo-unsplash.jpg"
                );
              }}
              href="#"
              className="winter"
            >
              Winter
            </a>
          </li>
          <li>
            <a
              onClick={(e) => {
                setBgState(
                  "/src/images/masaaki-komori-Z8TQv3yKQd4-unsplash.jpg"
                );
              }}
              href="#"
              className="spring"
            >
              Spring
            </a>
          </li>
          <li>
            <a
              onClick={(e) => {
                setBgState("/src/images/sean-o-KMn4VEeEPR8-unsplash.jpg");
              }}
              href="#"
              className="summer"
            >
              Summer
            </a>
          </li>
          <li>
            <a
              onClick={(e) => {
                setBgState(
                  "/src/images/kristian-seedorff-BvUicqkaZZ0-unsplash.jpg"
                );
              }}
              href="#"
              className="fall"
            >
              Fall
            </a>
          </li>
        </ul>
      </header>
      <section
        css={css`
          width: 85%;
          margin: 170px auto 0;
          position: relative;
          z-index: 1;
          grid-template-columns: auto auto;
          grid-template-rows: auto;
        `}
      >
        <AnimeCard></AnimeCard>
      </section>
      <div
        css={[
          bg,
          css`
            background-image: url(${bgState});
          `,
        ]}
        className="bg"
      ></div>
    </>
  );
}
