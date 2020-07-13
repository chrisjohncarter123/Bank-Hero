import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import astronautsReducer from "./astronautsReducer";
import catsReducer from "./catsReducer"

const rootReducer = combineReducers({
  counter: counterReducer,
  astronauts: astronautsReducer,
  cats: catsReducer
});

export default rootReducer;
