import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import astronautsReducer from "./astronautsReducer";
import catsReducer from "./catsReducer"
import accountsReducer from "./accountsReducer"

const rootReducer = combineReducers({
  counter: counterReducer,
  astronauts: astronautsReducer,
  cats: catsReducer,
  accounts: accountsReducer
});

export default rootReducer;
