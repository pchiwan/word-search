import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { CharacterGrid } from "../types";
import { calculateValidLine } from "../utils";

import Cell from "./Cell";

interface StyledGridProps {
  columns?: number;
}

const Root = styled.div<StyledGridProps>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns || 1}, 50px);
  border-top: 1px solid black;
  border-left: 1px solid black;
`;

export interface GridProps {
  grid: CharacterGrid;
  highlightedCells: Set<string>;
  onWordSelected?: (coords: string[]) => boolean;
}

const getCoordFromDataset = (event: React.MouseEvent<HTMLElement>): string => {
  if (event.target instanceof HTMLElement) {
    return event.target.dataset["coord"] || "";
  }
  return "";
};

const Grid = ({
  grid,
  highlightedCells,
  onWordSelected = () => false,
}: GridProps) => {
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startCoord, setStartCoord] = useState("");
  const [selectedCells, setSelectedCells] = useState(new Set<string>());
  const prevCoord = useRef("");

  useEffect(() => {
    const handleMouseUp = () => {
      setIsMouseDown(false);
    };

    // quit "selection mode" when mouse up happens outside of the grid
    document.addEventListener("mouseup", handleMouseUp);
    return () => document.removeEventListener("mouseup", handleMouseUp);
  }, []);

  useEffect(() => {
    setSelectedCells(new Set<string>());
  }, [grid]);

  const handleMouseDown = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      setIsMouseDown(true);
      setStartCoord(getCoordFromDataset(event));
    },
    []
  );

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    if (isMouseDown) {
      const coord = getCoordFromDataset(event);

      // since mouse move happens many times for the same cell, instead of
      // throttling the event handler we use a ref for the previous coord to
      // prevent calculating the same line multiple times
      if (startCoord !== coord && coord !== prevCoord.current) {
        const line = calculateValidLine(startCoord, coord);
        setSelectedCells(new Set(line));
        prevCoord.current = coord;
      }
    }
  };

  const handleMouseUp = (event: React.MouseEvent<HTMLElement>) => {
    setIsMouseDown(false);

    // onWordSelected callback will return true if the selected line is a valid word
    if (!onWordSelected(Array.from(selectedCells))) {
      setSelectedCells(new Set<string>());
    }
  };

  return (
    <Root columns={grid.length} data-testid="grid">
      {grid.map((arr: string[], y: number) =>
        arr.map((letter: string, x: number) => {
          const coord = `${x},${y}`;
          return (
            <Cell
              key={coord}
              coord={coord}
              highlighted={highlightedCells.has(coord)}
              selected={selectedCells.has(coord)}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
            >
              {letter}
            </Cell>
          );
        })
      )}
    </Root>
  );
};

export default Grid;
