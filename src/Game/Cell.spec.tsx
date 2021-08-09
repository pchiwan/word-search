import React from "react";
import { render, fireEvent } from "@testing-library/react";

import Cell, { CellProps, HIGHLIGHTED_COLOR } from "./Cell";

const DEFAULT_TEXT = "cell";
const DEFAULT_COORD = "0,0";

const renderCell = (props: CellProps) => {
  return render(<Cell {...props} />);
};

describe("Cell component", () => {
  it("should render the children", () => {
    const text = "hello world!";
    const { getByText } = renderCell({
      children: text,
      coord: DEFAULT_COORD,
    });
    expect(getByText(text)).toBeInTheDocument();
  });

  it("should add the 'coord' prop as a dataset attribute", () => {
    const coord = "4,2";
    const { getByText } = renderCell({
      children: DEFAULT_TEXT,
      coord,
    });
    expect(getByText(DEFAULT_TEXT)).toHaveAttribute("data-coord", coord);
  });

  it("should have selected style when 'selected' is true", () => {
    const { getByText } = renderCell({
      children: DEFAULT_TEXT,
      coord: DEFAULT_COORD,
      selected: true,
    });
    expect(getByText(DEFAULT_TEXT)).toHaveStyle(
      `background-color: ${HIGHLIGHTED_COLOR}`
    );
  });

  it("should have highlighted style when 'highlighted' is true", () => {
    const { getByText } = renderCell({
      children: DEFAULT_TEXT,
      coord: DEFAULT_COORD,
      highlighted: true,
    });
    expect(getByText(DEFAULT_TEXT)).toHaveStyle(
      `background-color: ${HIGHLIGHTED_COLOR}`
    );
  });

  it("should execute onMouseDown callback", () => {
    const onMouseDownSpy = jest.fn();
    const { getByText } = renderCell({
      children: DEFAULT_TEXT,
      coord: DEFAULT_COORD,
      onMouseDown: onMouseDownSpy,
    });

    fireEvent.mouseDown(getByText(DEFAULT_TEXT));
    expect(onMouseDownSpy).toHaveBeenCalledWith(DEFAULT_COORD);
  });

  it("should execute onMouseMove callback", () => {
    const onMouseMoveSpy = jest.fn();
    const { getByText } = renderCell({
      children: DEFAULT_TEXT,
      coord: DEFAULT_COORD,
      onMouseMove: onMouseMoveSpy,
    });

    fireEvent.mouseMove(getByText(DEFAULT_TEXT));
    expect(onMouseMoveSpy).toHaveBeenCalledWith(DEFAULT_COORD);
  });

  it("should execute onMouseUp callback", () => {
    const onMouseUpSpy = jest.fn();
    const { getByText } = renderCell({
      children: DEFAULT_TEXT,
      coord: DEFAULT_COORD,
      onMouseUp: onMouseUpSpy,
    });

    fireEvent.mouseUp(getByText(DEFAULT_TEXT));
    expect(onMouseUpSpy).toHaveBeenCalled();
  });
});
