import { showLoading, hideLoading } from "react-redux-loading";
import { receiveQuestions } from "./questions";
import { receiveUsers } from "./users";
import { getInitialData } from "../utils/api";

export function handleInitialData() {
	return (dispatch) => {
		dispatch(showLoading());
		getInitialData().then(({ questions, users }) => {
			dispatch(receiveQuestions(questions));
			dispatch(receiveUsers(users));
			dispatch(hideLoading());
		});
	};
}
