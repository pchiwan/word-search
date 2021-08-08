import React, { ReactNode } from "react";
import styled from "styled-components";

interface StyledCellProps {
  highlighted: boolean;
  selected: boolean;
}

export const HOVER_COLOR = "lemonchiffon";
export const HIGHLIGHTED_COLOR = "#ffef00";

const Root = styled.div<StyledCellProps>`
  text-align: center;
  padding: 8px;
  font-size: 24px;
  font-weight: bold;
  border-bottom: 1px solid black;
  border-right: 1px solid black;
  user-select: none;
  cursor: pointer;
  background-color: ${(props) =>
    props.highlighted || props.selected ? HIGHLIGHTED_COLOR : "white"};

  @media (min-width: 768px) {
    &:hover {
      background-color: ${(props) =>
        props.selected ? HIGHLIGHTED_COLOR : HOVER_COLOR};
    }
  }

  @media (max-width: 480px) {
    padding: 4px 8px;
    font-size: 18px;
  }
`;

export interface CellProps {
  children: ReactNode;
  coord: string;
  highlighted?: boolean;
  selected?: boolean;
  onMouseDown?: (coord: string) => void;
  onMouseMove?: (coord: string) => void;
  onMouseUp?: () => void;
}

const getCoordFromDataset = (element: HTMLElement): string => {
  return element.dataset["coord"] || "";
};

const Cell = ({
  children,
  coord,
  highlighted = false,
  selected = false,
  onMouseDown = () => {},
  onMouseMove = () => {},
  onMouseUp = () => {},
}: CellProps) => {
  const handleMouseDownOrTouchStart = (
    event: React.MouseEvent | React.TouchEvent
  ) => {
    onMouseDown(getCoordFromDataset(event.target as HTMLElement));
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    onMouseMove(getCoordFromDataset(event.target as HTMLElement));
  };

  const handleTouchMove = (event: React.TouchEvent) => {
    const changedTouch = event.changedTouches[0];
    const element = document.elementFromPoint(
      changedTouch.clientX,
      changedTouch.clientY
    );
    onMouseMove(getCoordFromDataset(element as HTMLElement));
  };

  const handleMouseUpOrTouchEnd = () => {
    onMouseUp();
  };

  return (
    <Root
      data-coord={coord}
      highlighted={highlighted}
      selected={selected}
      onMouseDown={handleMouseDownOrTouchStart}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUpOrTouchEnd}
      onTouchStart={handleMouseDownOrTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleMouseUpOrTouchEnd}
    >
      {children}
    </Root>
  );
};

export default React.memo(Cell);
