let users = {
  sarahedo: {
    id: "sarahedo",
    name: "Sarah Edo",
    avatarURL:
      "data:image/jpeg;base64,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",
    answers: {
      "8xf0y6ziyjabvozdd253nd": "optionOne",
      "6ni6ok3ym7mf1p33lnez": "optionTwo",
      am8ehyc8byjqgar0jgpub9: "optionTwo",
      loxhs1bqm25b708cmbf3g: "optionTwo",
    },
    questions: ["8xf0y6ziyjabvozdd253nd", "am8ehyc8byjqgar0jgpub9"],
  },
  tylermcginnis: {
    id: "tylermcginnis",
    name: "Tyler McGinnis",
    avatarURL:
      "https://image.shutterstock.com/image-vector/man-character-face-avatar-glasses-260nw-562077406.jpg",
    answers: {
      vthrdm985a262al8qx3do: "optionOne",
      xj352vofupe1dqz9emx13r: "optionTwo",
    },
    questions: ["loxhs1bqm25b708cmbf3g", "vthrdm985a262al8qx3do"],
  },
  johndoe: {
    id: "johndoe",
    name: "John Doe",
    avatarURL:
      "https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-hipster-vector-stock-91462914.jpg",
    answers: {
      xj352vofupe1dqz9emx13r: "optionOne",
      vthrdm985a262al8qx3do: "optionTwo",
      "6ni6ok3ym7mf1p33lnez": "optionTwo",
    },
    questions: ["6ni6ok3ym7mf1p33lnez", "xj352vofupe1dqz9emx13r"],
  },
};

let questions = {
  "8xf0y6ziyjabvozdd253nd": {
    id: "8xf0y6ziyjabvozdd253nd",
    author: "sarahedo",
    timestamp: 1467166872634,
    optionOne: {
      votes: ["sarahedo"],
      text: "have horrible short term memory",
    },
    optionTwo: {
      votes: [],
      text: "have horrible long term memory",
    },
  },
  "6ni6ok3ym7mf1p33lnez": {
    id: "6ni6ok3ym7mf1p33lnez",
    author: "johndoe",
    timestamp: 1468479767190,
    optionOne: {
      votes: [],
      text: "become a superhero",
    },
    optionTwo: {
      votes: ["johndoe", "sarahedo"],
      text: "become a supervillain",
    },
  },
  am8ehyc8byjqgar0jgpub9: {
    id: "am8ehyc8byjqgar0jgpub9",
    author: "sarahedo",
    timestamp: 1488579767190,
    optionOne: {
      votes: [],
      text: "be telekinetic",
    },
    optionTwo: {
      votes: ["sarahedo"],
      text: "be telepathic",
    },
  },
  loxhs1bqm25b708cmbf3g: {
    id: "loxhs1bqm25b708cmbf3g",
    author: "tylermcginnis",
    timestamp: 1482579767190,
    optionOne: {
      votes: [],
      text: "be a front-end developer",
    },
    optionTwo: {
      votes: ["sarahedo"],
      text: "be a back-end developer",
    },
  },
  vthrdm985a262al8qx3do: {
    id: "vthrdm985a262al8qx3do",
    author: "tylermcginnis",
    timestamp: 1489579767190,
    optionOne: {
      votes: ["tylermcginnis"],
      text: "find $50 yourself",
    },
    optionTwo: {
      votes: ["johndoe"],
      text: "have your best friend find $500",
    },
  },
  xj352vofupe1dqz9emx13r: {
    id: "xj352vofupe1dqz9emx13r",
    author: "johndoe",
    timestamp: 1493579767190,
    optionOne: {
      votes: ["johndoe"],
      text: "write JavaScript",
    },
    optionTwo: {
      votes: ["tylermcginnis"],
      text: "write Swift",
    },
  },
};

function generateUID() {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
}

export function _getUsers() {
  return new Promise((res, rej) => {
    setTimeout(() => res({ ...users }), 1000);
  });
}

export function _getQuestions() {
  return new Promise((res, rej) => {
    setTimeout(() => res({ ...questions }), 1000);
  });
}

function formatQuestion({ optionOneText, optionTwoText, author }) {
  return {
    id: generateUID(),
    timestamp: Date.now(),
    author,
    optionOne: {
      votes: [],
      text: optionOneText,
    },
    optionTwo: {
      votes: [],
      text: optionTwoText,
    },
  };
}

export function _saveQuestion(question) {
  return new Promise((res, rej) => {
    const authedUser = question.author;
    const formattedQuestion = formatQuestion(question);

    setTimeout(() => {
      questions = {
        ...questions,
        [formattedQuestion.id]: formattedQuestion,
      };

      users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          questions: users[authedUser].questions.concat([formattedQuestion.id]),
        },
      };

      res(formattedQuestion);
    }, 1000);
  });
}

export function _saveQuestionAnswer({ authedUser, qid, answer }) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          answers: {
            ...users[authedUser].answers,
            [qid]: answer,
          },
        },
      };

      questions = {
        ...questions,
        [qid]: {
          ...questions[qid],
          [answer]: {
            ...questions[qid][answer],
            votes: questions[qid][answer].votes.concat([authedUser]),
          },
        },
      };

      res();
    }, 500);
  });
}
