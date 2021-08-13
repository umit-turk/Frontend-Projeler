import { UserState } from "./../types/user";
import { combineReducers } from "redux";
import userReducer from "./reducers/userReducer";
import { CategoryState } from "../types/category";
import categoryReducer from "./reducers/CategoryReducer";

export interface AppState {
  user: UserState;
  categories: CategoryState;
  /* records: any; */
}

const rootReducer = combineReducers<AppState>({
  user: userReducer,
  categories: categoryReducer,
  /* records: () => {}, */
});

export default rootReducer;
