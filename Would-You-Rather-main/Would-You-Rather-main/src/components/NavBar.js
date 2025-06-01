import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
class Navbar extends Component {
  render() {
    const { authedUser, users } = this.props,
      user = users[authedUser];
    return (
      <nav className="nav-bar">
        <ul>
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/add">New Question</NavLink>
          </li>
          <li>
            <NavLink to="/leaderboard">Leaderboard</NavLink>
          </li>
          <li className="user">
            <img src={user.avatarURL} alt="avatar"></img>
            <p>
              Hello, <span>{user.name}</span>
            </p>
            <NavLink to="/" exact>
              Log-out
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    authedUser,
    users,
  };
}
export default connect(mapStateToProps)(Navbar);
