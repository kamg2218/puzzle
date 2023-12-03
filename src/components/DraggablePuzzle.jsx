import React, { useRef } from "react";
import { useDrag } from "react-dnd";

import styled from "styled-components";

import { ITEM_TYPES } from "../utils/util";

const DraggablePuzzle = ({ idx, x, y, img, show, handleDraggablePuzzle }) => {
  const draggableRef = useRef(false);

  const [{ opacity, transform, isDragging }, dragRef] = useDrag(
    () => ({
      type: ITEM_TYPES.draggable,
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.1 : 1,
        transform: draggableRef.current ? "scale(1.2)" : "scale(1)",
        isDragging: !!monitor.isDragging(),
      }),
      item: () => {
        setTimeout(() => {
          draggableRef.current = true;
        }, 500);
      },
      end: () => {
        console.log("end");
        handleDraggablePuzzle(idx);
        draggableRef.current = false;
      },
    }),
    []
  );

  return (
    <StyledList
      $x={x}
      $y={y}
      $img={img}
      $show={isDragging ? false : show}
      style={{ opacity, transform }}
      ref={dragRef}
    />
  );
};

const StyledList = styled.li`
  min-width: 30%;
  min-height: 80px;

  background: url(${({ $img }) => $img}) no-repeat;
  background-size: ${({ $show }) => ($show ? "300% 300%" : "0")};

  background-position-x: ${({ $x }) => $x};
  background-position-y: ${({ $y }) => $y};

  // &:hover {
  //   transform: scale(1.2);
  // }
`;

export default DraggablePuzzle;
