import { combineReducers, createStore } from "redux";

import { boardReducer } from "./Board/reducer";
import { loadingReducer } from "./Loading/reducer";
import { errorReducer } from "./Error/reducer";
import { resetPrevNumReducer } from "./ResetPrevNum/reducer";
import { customBoardReducer } from "./CustomBoard/reducer";

const rootReducer = combineReducers({
  boardReducer,
  loadingReducer,
  errorReducer,
  customBoardReducer,
  resetPrevNumReducer,
});

export const store = createStore(rootReducer);
