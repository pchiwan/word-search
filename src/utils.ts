import { Coordinate } from "./types";

const parseCoord = (coord: string): Coordinate => {
  const coordArray = coord.split(",");
  return {
    x: parseInt(coordArray[0], 10),
    y: parseInt(coordArray[1], 10),
  };
};

const isValidHorizontalLine = (xDiff: number, yDiff: number) => !yDiff && xDiff;
const isValidVerticalLine = (xDiff: number, yDiff: number) => !xDiff && yDiff;
const isValidDiagonalLine = (xDiff: number, yDiff: number) =>
  Math.abs(yDiff) === Math.abs(xDiff);

const getStartEnd = (numA: number, numB: number) => {
  return [Math.min(numA, numB), Math.max(numA, numB)];
};

const calculateHorizontalLine = (
  startCoord: Coordinate,
  endCoord: Coordinate
): string[] => {
  const coords = [];
  const [startX, endX] = getStartEnd(startCoord.x, endCoord.x);
  for (let x = startX; x <= endX; x++) {
    coords.push(`${x},${startCoord.y}`);
  }
  return coords;
};

const calculateVerticalLine = (
  startCoord: Coordinate,
  endCoord: Coordinate
): string[] => {
  const coords = [];
  const [startY, endY] = getStartEnd(startCoord.y, endCoord.y);
  for (let y = startY; y <= endY; y++) {
    coords.push(`${startCoord.x},${y}`);
  }
  return coords;
};

const calculateDiagonalLine = (
  startCoord: Coordinate,
  endCoord: Coordinate
): string[] => {
  const coords = [];
  const len = Math.abs(startCoord.x - endCoord.x);
  const xGrows = startCoord.x < endCoord.x;
  const yGrows = startCoord.y < endCoord.y;

  for (let i = 0; i <= len; i++) {
    const x = xGrows ? startCoord.x + i : startCoord.x - i;
    const y = yGrows ? startCoord.y + i : startCoord.y - i;
    coords.push(`${x},${y}`);
  }
  return coords;
};

export const calculateValidLine = (start: string, end: string): string[] => {
  const startCoord = parseCoord(start);
  const endCoord = parseCoord(end);

  const yDiff = startCoord.y - endCoord.y;
  const xDiff = startCoord.x - endCoord.x;

  let line: string[] = [];

  if (isValidHorizontalLine(xDiff, yDiff)) {
    line = calculateHorizontalLine(startCoord, endCoord);
  }

  if (isValidVerticalLine(xDiff, yDiff)) {
    line = calculateVerticalLine(startCoord, endCoord);
  }

  if (isValidDiagonalLine(xDiff, yDiff)) {
    line = calculateDiagonalLine(startCoord, endCoord);
  }

  if (!line.length) {
    return line;
  }

  return start !== line[0] ? line.reverse() : line;
};
