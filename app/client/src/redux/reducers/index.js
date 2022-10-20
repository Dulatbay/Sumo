import musics from "./musics";
import posts from "./posts";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  musics,
  posts
});

export default rootReducer