import { combineReducers } from "redux";
import { productReducer } from "./productReducer";
// saare reducers bana liye hain bhai
export const reducers = combineReducers({
  allProducts: productReducer,
});
