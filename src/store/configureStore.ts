import { combineReducers, configureStore, Reducer } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";

import sessionStorage from "redux-persist/es/storage/session";
import localStorage from "redux-persist/es/storage";

import { RootState, sessionReducers, localReducers } from ".";

const rootReducer = combineReducers({
  local: persistReducer(
    {
      key: "local",
      storage: localStorage,
    },
    combineReducers(localReducers)
  ),
  session: persistReducer(
    {
      key: "session",
      storage: sessionStorage,
    },
    combineReducers(sessionReducers)
  ),
}) as unknown as Reducer<RootState>;

export default () => {
  const store = configureStore({
    reducer: rootReducer,
  });
  const persist = persistStore(store);

  return { store, persist };
};
