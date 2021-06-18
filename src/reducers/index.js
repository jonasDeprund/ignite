import { combineReducers } from "redux";
// import Reducers
import gamesReducer from "./gamesReducer";

const rootReducer = combineReducers({
  games: gamesReducer,
});

export default rootReducer;
