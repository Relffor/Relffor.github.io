import React, { Component } from "react";
import { connect } from "react-redux";

class Question extends Component {
	render() {
		const { question, asker } = this.props;
		return (
			<div className="question">
				<img src={`${asker.avatarURL}`} alt="avatar"></img>
				<p>{asker.name} asks:</p>
				<h4>Would you rather..</h4>
				<span>...{question.optionOne.text}...</span>
				<button>View question details</button>
			</div>
		);
	}
}

function mapStateToProps({ users, questions }, { id }) {
	const question = questions[id],
		asker = question ? users[question.author] : null;
	return {
		asker,
		question,
	};
}

export default connect(mapStateToProps)(Question);
