import { combineReducers } from "redux";
import { loadingBarReducer } from "react-redux-loading";

import authedUser from "./authedUser";
import questions from "./questions";
import users from "./users";

export default combineReducers({
	authedUser,
	users,
	questions,
	loadingBar: loadingBarReducer,
});
