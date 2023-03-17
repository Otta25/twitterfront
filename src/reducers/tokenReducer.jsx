import { createSlice } from "@reduxjs/toolkit";

const tokenSlice = createSlice({
  name: "token",
  initialState: "",
  reducers: {
    createToken(state, action) {
      return (state = action.payload);
    },
  },
});
const { actions, reducer } = tokenSlice;
export const { createToken } = actions;
export default reducer;
