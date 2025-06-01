import React, { Component } from "react";
import { connect } from "react-redux";

class Leaderboard extends Component {
  render() {
    const { list } = this.props,
      sortedList = list.sort((a, b) => b.score - a.score);
    return (
      <div className="leaderboard">
        <ul>
          {sortedList.map((user) => (
            <li key={user.id}>
              <img src={`${user.avatarURL}`} alt="avatar"></img>
              <p>{user.name}</p>
              <h3>
                # of answered questions:{" "}
                <span>{Object.values(user.answers).length}</span>
              </h3>
              <h3>
                # of asked questions: <span>{user.questions.length}</span>
              </h3>
              <h3>
                Total Score: <span>{user.score}</span>
              </h3>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  let list = Object.values(users);
  list.map(
    (user) =>
      (user.score = user.questions.length + Object.values(user.answers).length)
  );
  return {
    list,
  };
}
export default connect(mapStateToProps)(Leaderboard);
