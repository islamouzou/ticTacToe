import { createStore, combineReducers } from "redux";
import board from "./components/store/reducers/board";

const rootReducer = combineReducers({
  board: board,
});

const store = createStore(rootReducer);
export type RootState = ReturnType<typeof store.getState>;

export default store;
