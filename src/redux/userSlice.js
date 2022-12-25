import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuthenticated: false,
  allUsers: [],
  allChats: [],
  selectedChat: null,
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
    setSelectedChat: (state, action) => {
      state.selectedChat = action.payload;
    },
  },
});

export const { loadLoggedInUser, setAllUsers, setAllChats, setSelectedChat } =
  userSlice.actions;
export default userSlice.reducer;
