import React from "react";

import styled from "styled-components";

import { ITEM_TYPES } from "../utils/util";
import { useDrop } from "react-dnd";

const DroppablePuzzle = ({ idx, x, y, img, show, movePuzzle }) => {
  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: ITEM_TYPES.draggable,
      drop: () => {
        movePuzzle(idx);
      },
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }),
    []
  );

  return (
    <StyledContainer ref={drop}>
      <StyledList $x={x} $y={y} $img={img} $show={show} $idx={idx} />
      {isOver && <StyledOver $x={x} $y={y} />}
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: 32%;
  min-height: 80px;
  position: relative;
  background-color: #e2e2e2;

  &:first-child {
    border-radius: 8px 0 0;
  }
  &:nth-child(3) {
    border-radius: 0 8px 0 0;
  }
  &:nth-child(7) {
    border-radius: 0 0 0 8px;
  }
  &:last-child {
    border-radius: 0 0 8px;
  }
`;

const StyledList = styled.li`
  width: 100%;
  height: 100%;
  border: 1px solid white;

  background: url(${({ $img }) => $img}) no-repeat;
  background-size: ${({ $show }) => ($show ? "300% 300%" : "0")};

  background-position-x: ${({ $x }) => $x};
  background-position-y: ${({ $y }) => $y};

  border-radius: ${({ $idx }) =>
    $idx === 0
      ? "8px 0 0"
      : $idx === 2
      ? "0 8px 0 0"
      : $idx === 6
      ? "0 0 0 8px"
      : $idx === 8
      ? "0 0 8px"
      : "0"};
`;

const StyledOver = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  opacity: 0.5;
  background-color: lightgray;

  background-position-x: ${({ $x }) => $x};
  background-position-y: ${({ $y }) => $y};
`;

export default DroppablePuzzle;
