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

  @media (max-width: 480px) {
    grid-template-columns: repeat(${(props) => props.columns || 1}, 32px);
  }
`;

export interface GridProps {
  grid: CharacterGrid;
  highlightedCells: Set<string>;
  onWordSelected?: (coords: string[]) => void;
}

const Grid = ({
  grid,
  highlightedCells,
  onWordSelected = () => {},
}: GridProps) => {
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startCoord, setStartCoord] = useState("");
  const [selectedCells, setSelectedCells] = useState(new Set<string>());
  const prevCoord = useRef("");

  useEffect(() => {
    const handleMouseUpOrTouchEnd = () => {
      setIsMouseDown(false);
    };
    // quit "selection mode" when mouse up/touch end happens outside of the grid
    document.addEventListener("mouseup", handleMouseUpOrTouchEnd);
    document.addEventListener("touchend", handleMouseUpOrTouchEnd);

    const preventScreenScroll = (event: TouchEvent) => {
      event.preventDefault();
    };
    // prevent screen from scrolling when touch-dragging over it
    document.addEventListener("touchmove", preventScreenScroll, {
      passive: false,
    });
    return () => {
      document.removeEventListener("mouseup", handleMouseUpOrTouchEnd);
      document.removeEventListener("touchend", handleMouseUpOrTouchEnd);
      document.removeEventListener("touchmove", preventScreenScroll);
    };
  }, []);

  useEffect(() => {
    setSelectedCells(new Set<string>());
  }, [grid]);

  const handleMouseDown = useCallback((coord: string) => {
    setIsMouseDown(true);
    setStartCoord(coord);
  }, []);

  const handleMouseMove = (coord: string) => {
    if (isMouseDown) {
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

  const handleMouseUp = () => {
    setIsMouseDown(false);

    // onWordSelected callback checks if the selected line is a valid word
    onWordSelected(Array.from(selectedCells));
    setSelectedCells(new Set<string>());
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
