import React from "react";
import styled from "styled-components";

import { CharacterGrid } from "../types";

interface StyledGridProps {
  columns?: number;
}

const Root = styled.div<StyledGridProps>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns || 1}, 50px);
  border-top: 1px solid black;
  border-left: 1px solid black;
`;

interface GridProps {
  grid: CharacterGrid;
}

const Cell = styled.div`
  text-align: center;
  padding: 8px;
  font-size: 24px;
  font-weight: bold;
  border-bottom: 1px solid black;
  border-right: 1px solid black;
  user-select: none;
  cursor: pointer;

  &:hover {
    background-color: #ffef00;
  }
`;

const Grid = ({ grid }: GridProps) => {
  return (
    <Root columns={grid.length}>
      {grid.map((arr: string[], i: number) =>
        arr.map((letter: string, j: number) => (
          <Cell key={`${i}-${j}`} data-coords={`${i}-${j}`}>
            {letter}
          </Cell>
        ))
      )}
    </Root>
  );
};

export default Grid;
