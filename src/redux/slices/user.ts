import { ResponseUser } from "@/services/api/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "@/redux/store";
import { HYDRATE } from "next-redux-wrapper";

export interface UserState {
  data: ResponseUser | null;
}

const initialState: UserState = {
  data: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<ResponseUser>) => {
      state.data = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      state.data = action.payload.user.data;
    },
  },
});

export const { setUserData } = userSlice.actions;

export const selectUserData = (state: AppState) => state.user.data;

export const userReducer = userSlice.reducer;
