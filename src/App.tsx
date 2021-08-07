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
  margin: 20px auto 0 auto;
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
      <h1>
        Word Search{" "}
        <span aria-label="Magnifying glass" role="img">
          🔍
        </span>
      </h1>
      {currentGame ? (
        <Game game={currentGame} onGameFinished={handleGameFinished} />
      ) : (
        <h2>There are no more games!</h2>
      )}
    </Root>
  );
}

export default App;
