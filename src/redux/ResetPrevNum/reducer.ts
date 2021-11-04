import { SET_RESET_PREV_NUM } from "./action";

type ActionType = {
  type: string;
  payload: boolean;
};

export function resetPrevNumReducer(reset = false, action: ActionType) {
  switch (action.type) {
    case SET_RESET_PREV_NUM:
      return action.payload;
    default:
      return reset;
  }
}
