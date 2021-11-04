export const SET_CUSTOM_BOARD = "SET_CUSTOM_BOARD";

export const setCustomBoard = (board: boolean) => ({
  type: SET_CUSTOM_BOARD,
  payload: board,
});

export const selectCustomBoard = (state: any): boolean =>
  state.customBoardReducer;
