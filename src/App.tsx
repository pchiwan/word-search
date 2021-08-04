import React, { useState } from "react";
import styled from "styled-components";

import Grid from "./components/Grid";
import { InputType } from "./types";
import { parseWordLocations } from "./utils";

const inputs: InputType[] = require("./inputs.json");

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 800px;
  margin: 20px auto 0 auto;
`;

const Paragraph = styled.p`
  margin: 5px 0;
  font-size: 20px;
`;

const Spacer = styled.div`
  margin-bottom: 20px;
`;

function App() {
  const [inputIndex, setInputIndex] = useState(0);

  const {
    character_grid,
    source_language,
    target_language,
    word,
    word_locations,
  } = inputs[inputIndex] as InputType;

  return (
    <Root>
      <h1>
        Word Search{" "}
        <span aria-label="Magnifying glass" role="img">
          🔍
        </span>
      </h1>
      <Spacer>
        <Paragraph>
          Search word: <strong>{word}</strong>
        </Paragraph>
        <Paragraph>
          Source language: <strong>{source_language}</strong>
        </Paragraph>
        <Paragraph>
          Target language: <strong>{target_language}</strong>
        </Paragraph>
      </Spacer>
      <Grid grid={character_grid} />
    </Root>
  );
}

export default App;
