export const EDIT_BOARD = "EDIT_BOARD";
export const CHANGE_PLAYER = "CHANGE_PLAYER";
export const RESET = "RESET";
export const SETWINNER = "SETWINNER";

export const editBoard = (move: string, index: number) => {
  return {
    type: EDIT_BOARD,
    data: {
      move,
      index,
    },
  };
};

export const changePlayer = (currentPlayer: string) => {
  return {
    type: CHANGE_PLAYER,
    data: { currentPlayer },
  };
};

export const reset = () => {
  return {
    type: RESET,
    data: {},
  };
};

export const setWinner = (winner: string) => {
  return {
    type: SETWINNER,
    data: {
      winner,
    },
  };
};
