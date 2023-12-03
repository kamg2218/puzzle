import React, { useEffect, useState } from "react";

import styled from "styled-components";

import dog from "../assets/image/retriever-dog.jpg";
import french from "../assets/image/french-bulldog.jpg";

import { IMAGE_POSITIONS, shuffle } from "../utils/util";
import DraggablePuzzle from "./DraggablePuzzle";

const PuzzleSelector = ({ board, handleDraggablePuzzle }) => {
  const [imageOrder, setImageOrder] = useState([]);

  const shuffleImage = (array) => {
    const result = shuffle(array.slice());
    setImageOrder(result);
  };

  useEffect(() => {
    const array = Array.from(Array(9), (_, idx) => idx);
    shuffleImage(array);
  }, []);

  return (
    <StyledContainer>
      {imageOrder.map((value) => {
        if (!!board[value]) return null;

        const { x, y } = IMAGE_POSITIONS[value];
        return (
          <DraggablePuzzle
            key={value}
            idx={value}
            x={x}
            y={y}
            img={french}
            show={true}
            handleDraggablePuzzle={handleDraggablePuzzle}
          />
        );
      })}
    </StyledContainer>
  );
};

const StyledContainer = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: no-wrap;
  justify-content: center;
  margin: 1rem 5rem;
  padding: 0.5rem;
  overflow-x: scroll;
  gap: 0.1rem;
  background-color: lightgray;
`;

export default PuzzleSelector;
