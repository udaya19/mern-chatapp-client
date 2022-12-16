import { configureStore } from "@reduxjs/toolkit";
import loadLoggedInUser from "./userSlice";

const store = configureStore({
  reducer: {
    user: loadLoggedInUser,
  },
});

export default store;
