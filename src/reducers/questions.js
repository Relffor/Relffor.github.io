import {
  ANSWER_QUESTION,
  ADD_QUESTION,
  RECEIVE_QUESTIONS,
} from "../actions/questions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case ADD_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question,
      };
    case ANSWER_QUESTION:
      return {
        ...state,
        [action.info.qid]: {
          ...state[action.info.qid],
          [action.info.answer]: {
            ...state[action.info.qid][action.info.answer],
            votes: state[action.info.qid][action.info.answer].votes.concat([
              action.info.authedUser,
            ]),
          },
        },
      };
    default:
      return state;
  }
}
