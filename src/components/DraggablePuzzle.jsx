import React from "react";
import { useDrag } from "react-dnd";

import styled from "styled-components";

import { ITEM_TYPES } from "../utils/util";

const DraggablePuzzle = ({ idx, x, y, img, show, handleDraggablePuzzle }) => {
  const [{ opacity, isDragging }, dragRef] = useDrag(
    () => ({
      type: ITEM_TYPES.draggable,
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.1 : 1,
        isDragging: !!monitor.isDragging(),
      }),
      end: () => {
        handleDraggablePuzzle(idx);
      },
    }),
    []
  );

  return (
    <StyledList
      x={x}
      y={y}
      img={img}
      show={isDragging ? false : show}
      style={{ opacity }}
      ref={dragRef}
    />
  );
};

const StyledList = styled.li`
  width: 32%;
  min-height: 80px;
  border: 1px solid black;

  background: url(${(props) => props.img}) no-repeat;
  background-size: ${({ show }) => (show ? "300% 300%" : "0")};

  background-position-x: ${(props) => props.x};
  background-position-y: ${(props) => props.y};

  &:hover {
    transform: scale(1.2);
    border: none;
  }
`;

export default DraggablePuzzle;
