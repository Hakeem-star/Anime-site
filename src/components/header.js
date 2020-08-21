import React from "react";
import { jsx, css } from "@emotion/core";
import PropTypes from "prop-types";

const headerStyle = css`
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

Header.propTypes = {
  setBgState: PropTypes.func,
};

export default function Header({ setBgState }) {
  return (
    <header css={headerStyle}>
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
              setBgState("/src/images/masaaki-komori-Z8TQv3yKQd4-unsplash.jpg");
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
  );
}
