import React, { useState } from "react";
import styled from "styled-components";

import { InputType } from "./types";
import Game from "./Game";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-family: "Unica One", cursive;
  font-size: 40px;

  span {
    font-size: 34px;
  }

  @media (max-width: 480px) {
    font-size: 30px;

    span {
      font-size: 24px;
    }
  }
`;

const Message = styled.h2`
  @media (max-width: 480px) {
    font-size: 20px;
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
        <Message>There are no more games!</Message>
      )}
    </Root>
  );
}

export default App;
