import React, { useCallback, useEffect, useMemo, useState } from "react";

import PuzzleBoard from "./PuzzleBoard";
import PuzzleSelector from "./PuzzleSelector";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const PuzzleContainer = () => {
  const [board, setBoard] = useState([]);

  const [dragging, setDragging] = useState(null);
  const handleDraggablePuzzle = (data) => {
    setDragging(data);
  };

  const [dropped, setDropped] = useState(null);
  const movePuzzle = (idx) => {
    setDropped(idx);
  };

  useEffect(() => {
    if (!isNaN(dropped) && dragging === dropped) {
      board[dragging] = true;
      setBoard([...board]);
    }
  }, [dropped]);

  return (
    <DndProvider backend={HTML5Backend}>
      <PuzzleBoard board={board} movePuzzle={movePuzzle} />
      <PuzzleSelector
        board={board}
        handleDraggablePuzzle={handleDraggablePuzzle}
      />
    </DndProvider>
  );
};

export default PuzzleContainer;
