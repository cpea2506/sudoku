import { SET_CUSTOM_BOARD } from "./action";

type ActionType = {
  type: string;
  payload: boolean;
};

export function customBoardReducer(board = false, action: ActionType) {
  switch (action.type) {
    case SET_CUSTOM_BOARD:
      return action.payload;
    default:
      return board;
  }
}
