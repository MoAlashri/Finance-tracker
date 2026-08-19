import { createListenerMiddleware } from "@reduxjs/toolkit";

import { setTheme } from "./slices/themeSlice";

export const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  actionCreator: setTheme,

  effect: (action) => {
    localStorage.setItem(
      "fintracker-theme",
      action.payload
    );
  },
});