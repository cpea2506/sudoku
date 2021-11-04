export const SET_BOARD = "SET_BOARD";

export const setBoard = (board: string) => ({
  type: SET_BOARD,
  payload: board,
});

export const selectBoard = (state: any): string => state.boardReducer;
