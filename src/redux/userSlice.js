import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    loadLoggedInUser: (state, action) => {
      console.log(action.payload);
      state.user = action.payload.user;
      state.isAuthenticated = true;
    },
  },
});

export const { loadLoggedInUser } = userSlice.actions;
export default userSlice.reducer;
