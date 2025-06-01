import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Question from "./Question";
class Home extends Component {
  state = {
    answered: false,
  };
  handleClick = (show) => {
    this.setState(() => ({
      answered: show,
    }));
  };

  render() {
    const { questions, authedUser } = this.props,
      { answered } = this.state;
    let arrayOfQuestions = Object.values(questions);
    if (answered) {
      arrayOfQuestions = arrayOfQuestions.filter(
        (q) =>
          q.optionOne.votes.includes(authedUser) ||
          q.optionTwo.votes.includes(authedUser)
      );
    } else {
      arrayOfQuestions = arrayOfQuestions.filter(
        (q) =>
          !q.optionOne.votes.includes(authedUser) &&
          !q.optionTwo.votes.includes(authedUser)
      );
    }
    const sortedQuestions = arrayOfQuestions.sort(
      (a, b) => b.timestamp - a.timestamp
    );
    return (
      <div className="home">
        <button onClick={(e) => this.handleClick(false)}>
          Unanswered Questions
        </button>
        <button onClick={(e) => this.handleClick(true)}>
          Answered Questions
        </button>
        <ul>
          {sortedQuestions.map((q) => (
            <li key={q.id}>
              {/* <Link to={`question/${q.id}`}> */}
              <Link to={`questions/${q["id"]}`}>
                <Question id={q.id} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, questions }) {
  return {
    authedUser,
    questions,
  };
}

export default connect(mapStateToProps)(Home);
