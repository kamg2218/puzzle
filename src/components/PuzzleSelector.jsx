import React, { useEffect, useState } from "react";

import styled from "styled-components";

import dog from "../assets/image/retriever-dog.jpg";
import french from "../assets/image/french-bulldog.jpg";

import { IMAGE_POSITIONS, shuffle } from "../utils/util";

const PuzzleSelector = () => {
  const [imageOrder, setImageOrder] = useState(IMAGE_POSITIONS);

  const shuffleImage = () => {
    const result = shuffle(imageOrder.slice());
    setImageOrder(result);
  };

  useEffect(() => {
    shuffleImage();
  }, []);

  return (
    <StyledContainer>
      {imageOrder.map(({ x, y }, idx) => {
        return <StyledList key={idx} x={x} y={y} img={french} show={true} />;
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

const StyledList = styled.li`
  width: 100%;
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

export default PuzzleSelector;
