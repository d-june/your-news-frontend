import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { userReducer } from "@/redux/slices/user";
import { createWrapper } from "next-redux-wrapper";

export function makeStore() {
  return configureStore({
    reducer: { user: userReducer },
  });
}

export const store = makeStore();

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export const wrapper = createWrapper<AppStore>(makeStore, { debug: true });
