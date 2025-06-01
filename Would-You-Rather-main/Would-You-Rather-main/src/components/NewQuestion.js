import React, { Component } from "react";
import { connect } from "react-redux";
import { handleAddQuestion } from "../actions/questions";
import { Redirect } from "react-router-dom";
class Newquestion extends Component {
  state = {
    toHome: false,
    text1: "",
    text2: "",
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch } = this.props;
    const { text1, text2 } = this.state;
    dispatch(handleAddQuestion(text1, text2));
    this.setState(() => ({
      toHome: true,
    }));
  };
  handleChange = (e, text) => {
    const value = e.target.value;
    if (text === "text1") {
      this.setState(() => ({
        text1: value,
      }));
    } else {
      this.setState(() => ({
        text2: value,
      }));
    }
  };

  render() {
    const { toHome } = this.state;
    if (toHome) {
      return <Redirect to="/home"></Redirect>;
    }
    return (
      <div className="new-question">
        <h2>Would you rather...</h2>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input
            name="optionOne"
            placeholder="Option 1 ..."
            onChange={(e) => this.handleChange(e, "text1")}
            value={this.state.text1}
            type="text"
          ></input>
          <span>Or</span>
          <input
            name="optionTwo"
            placeholder="Option 2 ..."
            onChange={(e) => this.handleChange(e, "text2")}
            value={this.state.text2}
            type="text"
          ></input>
          <button type="submit">Add Poll</button>
        </form>
      </div>
    );
  }
}

export default connect()(Newquestion);
