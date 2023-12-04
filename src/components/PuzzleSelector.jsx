import React, { useEffect, useState } from "react";

import styled from "styled-components";

import { shuffle } from "../utils/util";
import { IMAGE_POSITIONS } from "../utils/images";

import DraggablePuzzle from "./DraggablePuzzle";

const PuzzleSelector = ({ img, board, handleDraggablePuzzle }) => {
  const [imageOrder, setImageOrder] = useState([]);

  const shuffleImage = (array) => {
    const result = shuffle(array.slice());
    setImageOrder(result);
  };

  useEffect(() => {
    const array = Array.from(Array(9), (_, idx) => idx);
    shuffleImage(array);
  }, [img]);

  return (
    <StyledContainer>
      <StyledTitle>{"퍼즐 조각"}</StyledTitle>
      <StyledContent>
        {"조각을 꾹 눌러서 위 퍼즐판에 넣고 뺄 수 있어요!"}
      </StyledContent>
      <StyledSelector>
        {imageOrder.map((value) => {
          if (!!board[value]) return null;

          const { x, y } = IMAGE_POSITIONS[value];
          return (
            <DraggablePuzzle
              key={value}
              idx={value}
              x={x}
              y={y}
              img={img}
              show={true}
              handleDraggablePuzzle={handleDraggablePuzzle}
            />
          );
        })}
      </StyledSelector>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const StyledTitle = styled.h1`
  width: 100%;
  font-weight: 600;
  text-align: start;
`;

const StyledContent = styled.span`
  width: 100%;
  font-size: 0.8rem;
  text-align: start;
`;

const StyledSelector = styled.ul`
  width: 100%;
  height: 100%;
  min-height: 128px;
  display: flex;
  flex-flow: no-wrap;
  justify-content: start;
  align-items: center;
  padding: 0;
  margin-top: 0.1rem;
  overflow-x: scroll;
  overflow-y: hidden;
  gap: 0.4rem;
  background-color: #e2e2e2;
  border-radius: 8px;
`;

export default PuzzleSelector;
