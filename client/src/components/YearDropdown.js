import React, { useState, useEffect } from "react";
import { css } from "@emotion/core";
import { useLocation } from "react-router-dom";

function PreviousFiveYears({
  setselectedYear,
  filterByYear,
  setLikedSelectedYear,
  setActiveYear,
}) {
  const location = useLocation();
  const seasonPath = (location || window.location).pathname.split("/")[1];

  const currentYear = new Date().getFullYear();
  const years = [];
  const maxAmountOfYears = 5;
  for (let i = 0; i < maxAmountOfYears; i++) {
    const year = currentYear - i;
    years.push(
      <div
        key={year}
        className={`header-year__${year}`}
        onClick={() => {
          //Does something different depending on page we are on
          //Either filters the likes on the likes page or fetches from the API on the season page
          if (seasonPath === "likes") {
            filterByYear(year);
            setLikedSelectedYear(year);
            setActiveYear(year);
          } else {
            setselectedYear(year);
            setActiveYear(year);
          }
        }}
      >
        {year}
      </div>
    );
  }
  //If we are on the likes page, add an "All" option
  if (seasonPath === "likes") {
    years.unshift(
      <div
        key="All"
        className={`header-year__All`}
        onClick={() => {
          filterByYear("All");
          setLikedSelectedYear("All");
        }}
      >
        All
      </div>
    );
  }
  return years;
}

export default function YearDropdown({
  setselectedYear,
  selectedYear,
  filterByYear,
  likedSelectedYear,
  setLikedSelectedYear,
}) {
  const location = useLocation();
  const seasonPath = (location || window.location).pathname.split("/")[1];

  const [activeYear, setActiveYear] = useState(() => {
    if (seasonPath === "likes") {
      return likedSelectedYear;
    } else {
      return selectedYear;
    }
  });

  useEffect(() => {
    //Whenever we change pages between likes and seasons
    if (seasonPath === "likes") {
      setActiveYear(likedSelectedYear);
    } else {
      setActiveYear(selectedYear);
    }
  }, [location, likedSelectedYear, selectedYear]);

  return (
    <div
      css={css`
        overflow-y: auto;
        overflow-x: hidden;
        //Give the class with the current year an active style
        //This dynamically changes thanks to the setSelectedYear State
        .header-year__${activeYear} {
          background: yellow;
        }
        div {
          margin: 10px;
          cursor: pointer;
          padding: 5px;

          :hover {
            background: yellow;
          }
        }
      `}
    >
      <PreviousFiveYears
        setselectedYear={setselectedYear}
        setLikedSelectedYear={setLikedSelectedYear}
        filterByYear={filterByYear}
        setActiveYear={setActiveYear}
      />
    </div>
  );
}
