import { render, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import React from "react";
import Home from "./Home";
import { BrowserRouter as Router } from "react-router-dom";

test("It renders the heading", () => {
  const { getByText } = render(
    <Router>
      <Home />
    </Router>
  );
  expect(getByText("Winter")).toBeInTheDocument();
  expect(getByText("Spring")).toBeInTheDocument();
  expect(getByText("Summer")).toBeInTheDocument();
  expect(getByText("Fall")).toBeInTheDocument();
});

test("It shows the cards", async () => {
  const { getByTitle } = render(
    <Router>
      <Home />
    </Router>
  );
  //Mock the api request

  //test titles on pills shows
  await waitFor(() => expect(getByTitle("Filter page by")).toBeInTheDocument());
});
