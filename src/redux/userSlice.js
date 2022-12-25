import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuthenticated: false,
  allUsers: [],
  allChats: [],
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
    setAllUsers: (state, action) => {
      state.allUsers = action.payload.allUsers;
    },
    setAllChats: (state, action) => {
      state.allChats = action.payload;
    },
  },
});

export const { loadLoggedInUser, setAllUsers, setAllChats } = userSlice.actions;
export default userSlice.reducer;
