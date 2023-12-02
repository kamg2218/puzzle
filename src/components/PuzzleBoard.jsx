import React from "react";

import styled from "styled-components";

import dog from "../assets/image/retriever-dog.jpg";
import french from "../assets/image/french-bulldog.jpg";

import { IMAGE_POSITIONS } from "../utils/util";

const PuzzleBoard = () => {
  return (
    <>
      <StyledContainer>
        {IMAGE_POSITIONS.map(({ x, y }, idx) => {
          return <StyledList key={idx} x={x} y={y} img={french} show={idx} />;
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

const StyledList = styled.li`
  width: 32%;
  min-height: 80px;
  border: 1px solid black;

  background: url(${(props) => props.img}) no-repeat;
  background-size: ${({ show }) => (show ? "300% 300%" : "0")};

  background-position-x: ${(props) => props.x};
  background-position-y: ${(props) => props.y};
`;

export default PuzzleBoard;
