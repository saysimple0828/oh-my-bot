import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@/feature/user/userSlice";
import chatReducer from "@/feature/chat/chatSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      user: userReducer,
      chat: chatReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
