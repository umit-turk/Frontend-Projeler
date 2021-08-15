import { RecordState } from './../types/records';
import { UserState } from "./../types/user";
import { combineReducers } from "redux";
import userReducer from "./reducers/userReducer";
import { CategoryState } from "../types/category";
import categoryReducer from "./reducers/CategoryReducer";
import recordReducer from './reducers/recordReducer';

export interface AppState {
  user: UserState;
  categories: CategoryState;
  records: RecordState;
}

const rootReducer = combineReducers<AppState>({
  user: userReducer,
  categories: categoryReducer,
  records: recordReducer,
});

export default rootReducer;
