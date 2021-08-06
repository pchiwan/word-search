import React from "react";
import { render, fireEvent } from "@testing-library/react";

import { HIGHLIGHTED_COLOR } from "./Cell";
import Grid, { GridProps } from "./Grid";

const DEFAULT_GRID = [
  ["h", "i", "p", "a", "n"],
  ["k", "e", "k", "m", "l"],
  ["a", "x", "j", "o", "k"],
  ["p", "s", "a", "t", "x"],
  ["g", "q", "l", "z", "l"],
];
const DEFAULT_SET = new Set<string>();

const renderGrid = (props: GridProps) => {
  return render(<Grid {...props} />);
};

describe("Grid component", () => {
  it("should render the grid cells", () => {
    const { getByTestId, getByText } = renderGrid({
      grid: DEFAULT_GRID,
      highlightedCells: DEFAULT_SET,
    });
    expect(getByTestId("grid").children).toHaveLength(25);
    expect(getByText("h")).toHaveAttribute("data-coord", "0,0");
    expect(getByText("e")).toHaveAttribute("data-coord", "1,1");
    expect(getByText("j")).toHaveAttribute("data-coord", "2,2");
  });

  it("should highlight the highlighted grid cells", () => {
    const { getByText } = renderGrid({
      grid: DEFAULT_GRID,
      highlightedCells: new Set(["0,0", "1,1", "2,2"]),
    });
    expect(getByText("h")).toHaveStyle(
      `background-color: ${HIGHLIGHTED_COLOR}`
    );
    expect(getByText("e")).toHaveStyle(
      `background-color: ${HIGHLIGHTED_COLOR}`
    );
    expect(getByText("j")).toHaveStyle(
      `background-color: ${HIGHLIGHTED_COLOR}`
    );
  });

  it("should execute the 'onWordSelected' callback", () => {
    const onWordSelectedSpy = jest.fn();
    const { getByText } = renderGrid({
      grid: DEFAULT_GRID,
      highlightedCells: DEFAULT_SET,
      onWordSelected: onWordSelectedSpy,
    });

    fireEvent.mouseDown(getByText("h"));
    fireEvent.mouseMove(getByText("e"));
    fireEvent.mouseMove(getByText("j"));
    fireEvent.mouseUp(getByText("j"));
    expect(onWordSelectedSpy).toHaveBeenCalledWith(["0,0", "1,1", "2,2"]);
  });
});
