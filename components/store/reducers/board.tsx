import { AnyAction } from "redux";
import { BLANKBOARD, PLAYER1 } from "../../../constants";
import { CHANGE_PLAYER, EDIT_BOARD, RESET, SETWINNER } from "../actions/board";

const initialState = {
  board: BLANKBOARD,
  currentPlayer: PLAYER1,
  winner: null,
};

export default (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case EDIT_BOARD:
      let items = [...state.board];
      items[action.data.index] = action.data.move;

      return {
        ...state,
        board: items,
      };

    case RESET:
      return initialState;

    case CHANGE_PLAYER:
      return {
        ...state,
        currentPlayer: action.data.currentPlayer,
      };

    case SETWINNER:
      return {
        ...state,
        winner: action.data.winner,
      };
  }

  return state;
};
