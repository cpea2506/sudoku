export const SET_ERROR = "SET_ERROR";

export const setError = (error: boolean) => ({
  type: SET_ERROR,
  payload: error,
});

export const selectError = (state: any): boolean => state.errorReducer;
