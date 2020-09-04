import React, { useState, useEffect } from "react";
import { jsx, css } from "@emotion/core";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { BiFoodMenu } from "react-icons/bi";
import FilterDropdown from "./FilterDropdown";
import SortDropdown from "./SortDropdown";
import SearchInput from "./SearchInput";
import { Route } from "react-router-dom";

const headerStyle = css`
  color: black;
  font-size: 50px;
  width: 100%;
  height: 70px;
  z-index: 1;
  position: fixed;
  top: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  z-index: 10;
  background: white;
  padding: 0 7.5%;
  .nav {
    display: flex;
    width: 100%;
    max-width: 370px;
    margin: auto;
    justify-content: space-between;
    font-family: overpass;
    font-size: 1rem;
    grid-column: 2/3;
    a:link {
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

  @media (max-width: 1300px) {
    /* Mobile */
    height: 100px;
    grid-template-columns: minmax(0, 370px);
    grid-template-rows: 50% auto;
    position: sticky;
    top: -50px;
    .nav {
      grid-column: 1/2;
    }
    .header-likes,
    .header-filter-options {
      grid-column: 1/2;
      grid-row: 2/3;
      margin: 0;
    }
  }
`;

Header.propTypes = {
  setBgState: PropTypes.func,
};

export default function Header({
  setBgState,
  aggregatedGenres,
  filterByGenre,
  sortAnimePage,
  searchAnimePage,
}) {
  const [viewOptionsModalState, setViewOptionsModalState] = useState(null);

  useEffect(() => {
    //Listen for clicks off the filter elements to indicate intent to close the popups

    document.querySelector("body").addEventListener("click", function (event) {
      //Need to use the setState in here to prevent stale states
      setViewOptionsModalState((state) => {
        let newState = null;
        if (state !== null) {
          if (
            event.composedPath().some((ele) => {
              if (ele.classList && ele.classList.length > 0) {
                return (
                  ele.classList[0] ===
                  document.querySelector(".header-filter-options").classList[0]
                );
              } else {
                return false;
              }
            })
          ) {
            //Check if we clicked on an unrelated item
            newState = state;
          }
          //Stae remains the same
        } else newState = null;
        return newState;
      });
      //If the filters are open
    });
  }, []);

  function viewOptionsChange(state) {
    let output = null;
    switch (state) {
      case "Filter":
        output = (
          <FilterDropdown
            aggregatedGenres={aggregatedGenres}
            filterByGenre={filterByGenre}
          />
        );
        break;
      case "Sort":
        output = <SortDropdown sortAnimePage={sortAnimePage} />;
        break;

      case "Search":
        output = <SearchInput searchAnimePage={searchAnimePage} />;
        break;

      default:
        output = null;
        break;
    }

    return (
      output && (
        <div
          css={css`
            position: absolute;
            padding: 10px;
            text-align: center;
            transform: translateX(-50%);
            left: 50%;
            top: 30px;
            background: white;
            font-size: 0.9rem;
          `}
        >
          {output}
        </div>
      )
    );
  }

  return (
    <header css={headerStyle}>
      <div
        className="header-likes"
        css={css`
          display: flex;
          flex-direction: row;
          align-items: center;
          font-size: 1rem;
          font-family: overpass;
          margin-left: 30px;
          grid-column: 1/2;
          grid-row: 1/2;
          justify-content: flex-end;
          justify-self: start;
          align-self: center;
          border-bottom: 1px solid black;
          cursor: pointer;
          :hover {
            div {
              transform: translateY(-5px);
            }
          }
        `}
      >
        <Link to="/likes/all" className="winter">
          <div
            css={css`
              display: flex;
              flex-direction: row;
              align-items: center;
              transition: transform 0.5s cubic-bezier(0.37, 2, 0.42, 1.02);
            `}
          >
            <BiFoodMenu
              css={css`
                height: 30px;
              `}
            />

            <p
              css={css`
                margin-left: 10px;
              `}
            >
              My Likes
            </p>
          </div>
        </Link>
      </div>
      <ul className="nav">
        <li>
          <Link to="/winter" className="winter">
            Winter
          </Link>
        </li>
        <li>
          <Link to="/spring" className="spring">
            Spring
          </Link>
        </li>
        <Route path="/likes">
          <li>
            <Link to="/likes/all" className="all">
              All
            </Link>
          </li>
        </Route>
        <li>
          <Link to="/summer" className="summer">
            Summer
          </Link>
        </li>
        <li>
          <Link to="/fall" className="fall">
            Fall
          </Link>
        </li>
      </ul>

      <div
        className="header-filter-options"
        css={css`
          position: relative;

          font-size: 1rem;
          grid-column: 3/4;
          grid-row: 1/2;
          justify-self: end;
          align-self: center;
          margin-right: 51px;
          font-family: overpass;
          span {
            margin-right: 20px;
            cursor: pointer;
          }
          span:last-of-type {
            margin: 0;
          }
        `}
      >
        <span
          onClick={() =>
            setViewOptionsModalState((state) =>
              state === "Filter" ? false : "Filter"
            )
          }
        >
          Filter
        </span>
        <span
          onClick={() =>
            setViewOptionsModalState((state) =>
              state === "Sort" ? false : "Sort"
            )
          }
        >
          Sort
        </span>
        <span
          onClick={() =>
            setViewOptionsModalState((state) =>
              state === "Search" ? false : "Search"
            )
          }
        >
          Search
        </span>
        {viewOptionsChange(viewOptionsModalState)}
      </div>
    </header>
  );
}
