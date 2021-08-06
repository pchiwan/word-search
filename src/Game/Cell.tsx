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

  &:hover {
    background-color: ${(props) =>
      props.selected ? HIGHLIGHTED_COLOR : HOVER_COLOR};
  }
`;

export interface CellProps {
  children: ReactNode;
  coord: string;
  highlighted?: boolean;
  selected?: boolean;
  onMouseDown?: (event: React.MouseEvent<HTMLElement>) => void;
  onMouseMove?: (event: React.MouseEvent<HTMLElement>) => void;
  onMouseUp?: (event: React.MouseEvent<HTMLElement>) => void;
}

const Cell = ({
  children,
  coord,
  highlighted = false,
  selected = false,
  onMouseDown = () => {},
  onMouseMove = () => {},
  onMouseUp = () => {},
}: CellProps) => {
  return (
    <Root
      data-coord={coord}
      highlighted={highlighted}
      selected={selected}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
    >
      {children}
    </Root>
  );
};

export default React.memo(Cell);
