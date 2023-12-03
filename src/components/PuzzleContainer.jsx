import React, { useEffect, useState } from "react";

import PuzzleBoard from "./PuzzleBoard";
import PuzzleSelector from "./PuzzleSelector";
import Button from "./Button";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { IMAGE_LIST, getRandomNumber } from "../utils/util";

import styled from "styled-components";

const PuzzleContainer = () => {
  const [board, setBoard] = useState([]);
  const [img, setImg] = useState(
    IMAGE_LIST[getRandomNumber(IMAGE_LIST.length)]
  );

  const [dragging, setDragging] = useState(null);
  const handleDraggablePuzzle = (data) => {
    setDragging(data);
  };

  const [dropped, setDropped] = useState(null);
  const movePuzzle = (idx) => {
    setDropped(idx);
  };

  const handleButtonClick = () => {
    setBoard([]);
    const idx = getRandomNumber(IMAGE_LIST.length);
    setImg(IMAGE_LIST[idx]);
  };

  useEffect(() => {
    if (!isNaN(dropped) && dragging === dropped) {
      setBoard((prev) => {
        prev[dragging] = true;
        return [...prev];
      });
    }
  }, [dropped, dragging]);

  return (
    <StyledContainer>
      <DndProvider backend={HTML5Backend}>
        <PuzzleBoard img={img} board={board} movePuzzle={movePuzzle} />
        <PuzzleSelector
          img={img}
          board={board}
          handleDraggablePuzzle={handleDraggablePuzzle}
        />
        <StyledButton>
          <Button
            label={"이 사진 그만 볼래요"}
            handleClick={handleButtonClick}
          />
          <Button label={"넘기기"} handleClick={handleButtonClick} />
        </StyledButton>
      </DndProvider>
    </StyledContainer>
  );
};

const StyledButton = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 1rem;
`;

const StyledContainer = styled.div`
  width: 80%;
  height: 100%;
`;

export default PuzzleContainer;
