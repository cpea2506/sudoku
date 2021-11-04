export const SET_RESET_PREV_NUM = "SET_RESET_PREV_NUM";

export const setResetPrevNum = (reset: boolean) => ({
  type: SET_RESET_PREV_NUM,
  payload: reset,
});

export const selectResetPrevNum = (state: any): boolean =>
  state.resetPrevNumReducer;
