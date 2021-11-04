export const SET_LOADING = "SET_LOADING";

export const setLoading = (loading: boolean) => ({
  type: SET_LOADING,
  payload: loading,
});

export const selectLoading = (state: any): boolean => state.loadingReducer;
