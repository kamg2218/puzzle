import React from "react";

import styled from "styled-components";

import dog from "../assets/image/retriever-dog.jpg";
import french from "../assets/image/french-bulldog.jpg";

import { IMAGE_POSITIONS } from "../utils/util";
import DroppablePuzzle from "./DroppablePuzzle";

const PuzzleBoard = ({ board, movePuzzle }) => {
  return (
    <>
      <StyledContainer>
        {IMAGE_POSITIONS.map(({ x, y }, idx) => {
          return (
            <DroppablePuzzle
              key={idx}
              idx={idx}
              x={x}
              y={y}
              img={french}
              show={!!board[idx]}
              movePuzzle={movePuzzle}
            />
          );
        })}
      </StyledContainer>
      <img alt="dog" src={french} width="30%" height="100%" />
    </>
  );
};

const StyledContainer = styled.ul`
  width: 99%;
  height: 100%;
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  margin: 2rem;
`;

export default PuzzleBoard;
