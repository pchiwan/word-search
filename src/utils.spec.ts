import {
  calculateHorizontalLine,
  calculateVerticalLine,
  calculateDiagonalLine,
  calculateValidLine,
} from "./utils";

describe("calculateHorizontalLine", () => {
  it("returns an array of interpolated horizontal coordinates from given start and end coordinates", () => {
    const start = { x: 0, y: 0 }
    const end = { x: 3, y: 0 }
    expect(calculateHorizontalLine(start, end)).toEqual(["0,0", "1,0", "2,0", "3,0"]);
    expect(calculateHorizontalLine(end, start)).toEqual(["0,0", "1,0", "2,0", "3,0"]);
  });
});

describe("calculateVerticalLine", () => {
  it("returns an array of interpolated vertical coordinates from given start and end coordinates", () => {
    const start = { x: 0, y: 0 }
    const end = { x: 0, y: 3 }
    expect(calculateVerticalLine(start, end)).toEqual(["0,0", "0,1", "0,2", "0,3"]);
    expect(calculateVerticalLine(end, start)).toEqual(["0,0", "0,1", "0,2", "0,3"]);
  });
});

describe("calculateDiagonalLine", () => {
  const start = { x: 0, y: 0 }
  const end = { x: 3, y: 3 }
  it("returns an array of interpolated diagonal coordinates from given start and end coordinates", () => {
    expect(calculateDiagonalLine(start, end)).toEqual(["0,0", "1,1", "2,2", "3,3"]);
    expect(calculateDiagonalLine(end, start)).toEqual(["3,3", "2,2", "1,1", "0,0"]);
  });
});

describe("calculateValidLine", () => {
  it.each([
    ["0,0", "3,0", ["0,0", "1,0", "2,0", "3,0"]],
    ["0,0", "0,3", ["0,0", "0,1", "0,2", "0,3"]],
    ["0,0", "3,3", ["0,0", "1,1", "2,2", "3,3"]],
    ["3,0", "0,0", ["3,0", "2,0", "1,0", "0,0"]],
    ["0,3", "0,0", ["0,3", "0,2", "0,1", "0,0"]],
    ["3,3", "0,0", ["3,3", "2,2", "1,1", "0,0"]],
  ])("returns an array of interpolated coordinates for valid horizontal, vertical, or diagonal lines", (start, end, result) => {
    expect(calculateValidLine(start, end)).toEqual(result);
  });

  it.each([
    ["0,0", "1,2"],
    ["0,1", "3,3"],
    ["3,0", "0,1"],
    ["3,3", "1,2"],
  ])("returns an empty array for invalid horizontal, vertical, or diagonal lines", (start, end) => {
    expect(calculateValidLine(start, end)).toEqual([]);
  });
});
