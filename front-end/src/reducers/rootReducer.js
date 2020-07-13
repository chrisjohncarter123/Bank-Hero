import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import astronautsReducer from "./astronautsReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  astronauts: astronautsReducer,
});

export default rootReducer;
