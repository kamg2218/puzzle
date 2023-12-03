import React from "react";

import DroppablePuzzle from "./DroppablePuzzle";

import styled from "styled-components";

import { IMAGE_POSITIONS } from "../utils/util";

const PuzzleBoard = ({ img, board, movePuzzle }) => {
  return (
    <StyledContainer>
      {IMAGE_POSITIONS.map(({ x, y }, idx) => {
        return (
          <DroppablePuzzle
            key={idx}
            idx={idx}
            x={x}
            y={y}
            img={img}
            show={!!board[idx]}
            movePuzzle={movePuzzle}
          />
        );
      })}
    </StyledContainer>
  );
};

const StyledContainer = styled.ul`
  width: 99%;
  height: 100%;
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  margin: 2rem 0;
`;

export default PuzzleBoard;
