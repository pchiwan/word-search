import { Dictionary } from "./types";

type Coordinate = {
  x: number;
  y: number;
};

type WordCoordinates = {
  word: string;
  coords: Coordinate[];
};

export const parseWordLocations = (
  wordLocations: Dictionary
): WordCoordinates[] => {
  const output: WordCoordinates[] = [];

  Object.keys(wordLocations).forEach((key) => {
    const wordCoords: WordCoordinates = {
      word: wordLocations[key],
      coords: [],
    };

    const coords = key.split(",");

    for (let i = 0; i < coords.length; i += 2) {
      wordCoords.coords.push({
        x: parseInt(coords[i], 10),
        y: parseInt(coords[i + 1], 10),
      });
    }

    output.push(wordCoords);
  });

  return output;
};
