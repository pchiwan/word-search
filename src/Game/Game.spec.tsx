import React from "react";
import { render } from "@testing-library/react";

import Game, { GameProps } from "./Game";

const DEFAULT_GAME = {
  source_language: "en",
  word: "hello",
  character_grid: [
    ["h", "i", "p", "a", "n"],
    ["k", "e", "k", "m", "l"],
    ["a", "x", "j", "o", "k"],
    ["p", "s", "a", "t", "x"],
    ["g", "q", "l", "z", "l"],
  ],
  word_locations: {
    "0,0,1,1,2,2": "hej",
  },
  target_language: "sv",
};

const renderGame = (props: GameProps) => {
  return render(<Game {...props} />);
};

describe("Game component", () => {
  it("should render the game information", () => {
    const { getByText } = renderGame({ game: DEFAULT_GAME });
    expect(getByText(DEFAULT_GAME.word)).toBeInTheDocument();
    expect(getByText(DEFAULT_GAME.source_language)).toBeInTheDocument();
    expect(getByText(DEFAULT_GAME.target_language)).toBeInTheDocument();
  });

  it("should render the game grid", () => {
    const { getByTestId } = renderGame({ game: DEFAULT_GAME });
    expect(getByTestId("grid")).toBeInTheDocument();
  });
});
