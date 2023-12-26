import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { charactersReducer } from "./slice";

const rootReducer = combineReducers({
  characters: charactersReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;