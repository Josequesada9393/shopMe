// import { USER_ACTION_TYPES } from "./user.types";
import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export type User = {
  accessToken: string;
  email: string
}
export interface userState {
  currentUser: User | null
}
const INITIAL_STATE: userState = {
  currentUser: null
}

export const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    setCurrentUser(state, action:PayloadAction<User>) {
        state.currentUser = action.payload
    },
  },

})

export const { setCurrentUser } = userSlice.actions;

export const userReducer = userSlice.reducer;