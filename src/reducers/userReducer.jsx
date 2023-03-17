import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: "",
  reducers: {
    createUser(state, action) {
      return (state = action.payload);
    },
  },
});
const { actions, reducer } = userSlice;
export const { createUser } = actions;
export default reducer;
