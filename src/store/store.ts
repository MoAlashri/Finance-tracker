import { configureStore } from "@reduxjs/toolkit";

import themeReducer from "./slices/themeSlice";
import { listenerMiddleware } from "./listenerMiddleware";

const store = configureStore({
  reducer: {
    theme: themeReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(
      listenerMiddleware.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;