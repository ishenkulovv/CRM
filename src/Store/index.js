import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import ordersSlice from "./Slice/ordersSlice";
import customersSlice from "./Slice/customersSlice";
import usersSlice from "./Slice/usersSlice";

const rootReducer = combineReducers({ordersSlice, customersSlice, usersSlice});

const persistedReducer = persistReducer(
  {
    key: "root",
    storage,
    whitelist: ['ordersSlice', 'usersSlice']
  },
  rootReducer
);

export const store = configureStore({
  reducer: {
    rootReducer: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
});

export const persistor = persistStore(store);
