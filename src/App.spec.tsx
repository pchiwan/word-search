import React from "react";
import { render } from "@testing-library/react";

import App, { AppProps } from "./App";

const renderApp = (props?: AppProps) => {
  return render(<App {...props} />);
};

describe("App component", () => {
  it("should render a message when there are no games to play", () => {
    const { getByText } = renderApp({});
    expect(getByText("There are no more games!")).toBeInTheDocument();
  });

  it("should render the Game component when there are games to play", () => {
    const { getByTestId } = renderApp({
      games: [
        {
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
        },
      ],
    });
    expect(getByTestId("grid")).toBeInTheDocument();
  });
});
