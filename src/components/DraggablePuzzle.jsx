import React, { useEffect, useRef, useState } from "react";
import { useDrag } from "react-dnd";

import styled from "styled-components";

import { ITEM_TYPES } from "../utils/util";

const START = "start";
const END = "end";
const DRAGGABLE = "draggable";

const DraggablePuzzle = ({ idx, x, y, img, show, handleDraggablePuzzle }) => {
  const timeRef = useRef(null);
  const draggableRef = useRef(END);

  const [draggable, setDraggable] = useState(false);

  const [{ opacity, isDragging }, dragRef] = useDrag(
    () => ({
      type: ITEM_TYPES.draggable,
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.1 : 1,
        isDragging: !!monitor.isDragging(),
      }),
      canDrag: () => draggableRef.current === DRAGGABLE,
      end: () => {
        handleDraggablePuzzle(idx);
        draggableRef.current = END;
        setDraggable(false);
      },
    }),
    []
  );

  const makeTimeOut = () => {
    if (timeRef.current) {
      clearTimeout(timeRef.current);
    }
    timeRef.current = setTimeout(() => {
      if (draggableRef.current === END) return;
      draggableRef.current = DRAGGABLE;
      setDraggable(true);
    }, 500);
  };

  useEffect(() => {
    return () => {
      if (timeRef.current) {
        clearTimeout(timeRef.current);
      }
    };
  }, []);

  return (
    <StyledList
      $x={x}
      $y={y}
      $img={img}
      $show={isDragging ? false : show}
      $draggable={draggable}
      style={{ opacity }}
      ref={dragRef}
      onMouseDown={() => {
        makeTimeOut();
        draggableRef.current = START;
      }}
      onMouseUp={() => {
        draggableRef.current = END;
        setDraggable(false);
      }}
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

  &:hover {
    transform: ${({ $draggable }) => ($draggable ? "scale(1.2)" : "scale(1)")};
  }
`;

export default DraggablePuzzle;
