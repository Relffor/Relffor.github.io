import { showLoading, hideLoading } from "react-redux-loading";
import { saveQuestion, saveQuestionAnswer } from "../utils/api";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS",
	ADD_QUESTION = "ADD_QUESTION",
	ANSWER_QUESTION = "ANSWER_QUESTION";

export function receiveQuestions(questions) {
	return {
		type: RECEIVE_QUESTIONS,
		questions,
	};
}

function addQuestion(question) {
	return {
		type: ADD_QUESTION,
		question,
	};
}

export function handleAddQuestion(optionOne, optionTwo) {
	return (dispatch, getState) => {
		dispatch(showLoading());
		const { authedUser } = getState();
		return saveQuestion({
			optionOneText: optionOne,
			optionTwoText: optionTwo,
			author: authedUser,
		})
			.then((question) => {
				dispatch(addQuestion(question));
				dispatch(hideLoading());
			})
			.catch(() => {
				console.error("Error in adding question");
				alert("Error saving the question,try again");
			});
	};
}

function answerQuestion(info) {
	return {
		type: ANSWER_QUESTION,
		info,
	};
}

export function handleAnswerQuestion(info) {
	return (dispatch) => {
		dispatch(showLoading());
		return saveQuestionAnswer(info)
			.then(() => {
				dispatch(answerQuestion(info));
				dispatch(hideLoading());
			})
			.catch(() => {
				console.error("Error in answering question");
				alert("Error saving the question answer,try again");
			});
	};
}
