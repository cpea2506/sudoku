import { SET_LOADING } from "./action";

type ActionType = {
  type: string;
  payload: boolean;
};

export const loadingReducer = (loading = false, action: ActionType) => {
  switch (action.type) {
    case SET_LOADING:
      return action.payload;
    default:
      return loading;
  }
};
