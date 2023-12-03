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
      <StyledList x={x} y={y} img={img} show={show} />
      {isOver && <StyledOver x={x} y={y} />}
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: 32%;
  min-height: 80px;
  position: relative;
`;

const StyledList = styled.li`
  width: 100%;
  height: 100%;
  border: 1px solid black;

  background: url(${(props) => props.img}) no-repeat;
  background-size: ${({ show }) => (show ? "300% 300%" : "0")};

  background-position-x: ${(props) => props.x};
  background-position-y: ${(props) => props.y};
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

  background-position-x: ${(props) => props.x};
  background-position-y: ${(props) => props.y};
`;

export default DroppablePuzzle;
