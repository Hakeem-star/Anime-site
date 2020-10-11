import React, { useState } from "react";
import { css } from "@emotion/core";

function PreviousFiveYears({ setselectedYear }) {
  const currentYear = new Date().getFullYear();
  const years = [];
  const maxAmountOfYears = 5;
  for (let i = 0; i < maxAmountOfYears; i++) {
    years.push(
      <div
        key={currentYear - i}
        className={`header-year__${currentYear - i}`}
        onClick={() => {
          setselectedYear(currentYear - i);
        }}
      >
        {currentYear - i}
      </div>
    );
  }

  return years;
}

export default function YearDropdown({ setselectedYear, selectedYear }) {
  return (
    <div
      css={css`
        overflow-y: auto;
        overflow-x: hidden;
        //Give the class with the current year an active style
        //This dynamically changes thanks to the setSelectedYear State
        .header-year__${selectedYear} {
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
      <PreviousFiveYears setselectedYear={setselectedYear} />
    </div>
  );
}
