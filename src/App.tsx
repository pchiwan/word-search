import React, { useState } from "react";
import styled from "styled-components";

import { InputType } from "./types";
import Game from "./Game";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 800px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-family: "Unica One", cursive;
  font-size: 40px;

  span {
    font-size: 34px;
  }
`;

export interface AppProps {
  games?: InputType[];
}

function App({ games = [] }: AppProps) {
  const [gameIndex, setGameIndex] = useState(0);

  const handleGameFinished = () => {
    setGameIndex(gameIndex + 1);
  };

  const currentGame = games[gameIndex];

  return (
    <Root>
      <Title>
        Word Search{" "}
        <span aria-label="Magnifying glass" role="img">
          🔍
        </span>
      </Title>
      {currentGame ? (
        <Game game={currentGame} onGameFinished={handleGameFinished} />
      ) : (
        <h2>There are no more games!</h2>
      )}
    </Root>
  );
}

export default App;
