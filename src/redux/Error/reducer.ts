import { SET_ERROR } from "./action";

type ActionType = {
  type: string;
  payload: boolean;
};

export function errorReducer(error = false, action: ActionType) {
  switch (action.type) {
    case SET_ERROR:
      return action.payload;
    default:
      return error;
  }
}
