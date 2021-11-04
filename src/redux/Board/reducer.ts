import { SET_BOARD } from "./action";

const initial =
  ".................................................................................";

type ActionType = {
  type: string;
  payload: string;
};

export function boardReducer(board = initial, action: ActionType) {
  switch (action.type) {
    case SET_BOARD:
      return action.payload;
    default:
      return board;
  }
}
