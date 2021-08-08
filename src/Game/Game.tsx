import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { InputType } from "../types";
import Grid from "./Grid";

const Paragraph = styled.p`
  font-size: 20px;
  margin: 5px 0;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const Spacer = styled.div`
  margin-bottom: 20px;
`;

export interface GameProps {
  game: InputType;
  onGameFinished?: () => void;
}

const Game = ({ game, onGameFinished = () => {} }: GameProps) => {
  const [foundCoords, setFoundCoords] = useState(new Set<string>());
  const wordLocations = useRef([] as string[]);
  const foundWordsCount = useRef(0);

  const reset = useCallback(() => {
    setFoundCoords(new Set<string>());
    wordLocations.current = Object.keys(game.word_locations);
    foundWordsCount.current = 0;
  }, [game]);

  useEffect(() => {
    if (game) {
      reset();
    }
  }, [game, reset]);

  const handleWordSelected = (coords: string[]): boolean => {
    if (wordLocations.current.includes(coords.join(","))) {
      foundWordsCount.current += 1;

      if (foundWordsCount.current === wordLocations.current.length) {
        onGameFinished();
      } else {
        setFoundCoords(new Set([...Array.from(foundCoords), ...coords]));
      }

      return true;
    }

    return false;
  };

  return (
    <>
      <Spacer>
        <Paragraph>
          Search word: <strong>{game.word}</strong>
        </Paragraph>
        <Paragraph>
          Source language: <strong>{game.source_language}</strong>
        </Paragraph>
        <Paragraph>
          Target language: <strong>{game.target_language}</strong>
        </Paragraph>
        <Paragraph>
          Words to find:{" "}
          <strong>
            {foundWordsCount.current}/{wordLocations.current.length}
          </strong>
        </Paragraph>
      </Spacer>
      <Grid
        grid={game.character_grid}
        highlightedCells={foundCoords}
        onWordSelected={handleWordSelected}
      />
    </>
  );
};

export default Game;
