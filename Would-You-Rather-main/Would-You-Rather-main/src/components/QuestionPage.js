import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { handleAnswerQuestion } from "../actions/questions";

class Questionpage extends Component {
	//from where is this component called?
	state = {
		answer: "",
	};
	handleVote = (vote) => {
		this.setState(() => ({
			answer: vote,
		}));
	};
	handleSubmit = (e) => {
		e.preventDefault();
		const { answer } = this.state,
			{ dispatch, id, authedUser } = this.props;
		dispatch(handleAnswerQuestion({ authedUser, qid: id, answer }));
	};

	render() {
		const {
				answered,
				question,
				percentage1,
				percentage2,
				users,
				votes1,
				votes2,
				totalVotes,
				id,
				authedUser,
			} = this.props,
			author = question ? users[question.author] : null,
			answer = question ? users[authedUser].answers[id] : null;
		if (!question) {
			return <Redirect to="/not-found" />;
		}
		return (
			<div className="question-page">
				<img alt="avatar" src={`${author.avatarURL}`} />
				{answered ? (
					<p>
						Asked by <span>{author.name}</span>
					</p>
				) : (
					<p>
						<span>{author.name} </span>asks:
					</p>
				)}
				{answered ? (
					<>
						<h3>Results:</h3>
						<h4 className={answer === "optionOne" ? "bold" : null}>
							{question.optionOne.text}
						</h4>
						<div>
							{votes1} out of {totalVotes} votes
						</div>
						<div>Percentage: {percentage1}%</div>
						<br></br>
						<h4 className={answer === "optionTwo" ? "bold" : null}>
							{question.optionTwo.text}
						</h4>
						<div>
							{votes2} out of {totalVotes} votes
						</div>
						<div>Percentage: {percentage2}%</div>
					</>
				) : (
					<>
						<h3>Would you rather..?</h3>
						<form onSubmit={(e) => this.handleSubmit(e)}>
							<input
								type="radio"
								onClick={(e) => this.handleVote("optionOne")}
								// value={question.optionOne.text}
								id="ip1"
								name="option"
							></input>
							<label htmlFor="ip1">{question.optionOne.text}</label>
							<input
								type="radio"
								onClick={(e) => this.handleVote("optionTwo")}
								// value={question.optionTwo.text}
								id="ip2"
								name="option"
							></input>
							<label htmlFor="ip2">{question.optionTwo.text}</label>
							<button type="submit" disabled={this.state.answer === ""}>
								Submit
							</button>
						</form>
					</>
				)}
			</div>
		);
	}
}

function mapStateToProps({ authedUser, users, questions }, { match }) {
	const { id } = match.params,
		question = questions[id],
		answered = question
			? question.optionOne.votes.includes(authedUser) ||
			  question.optionTwo.votes.includes(authedUser)
			: false,
		votes1 =
			question && question.optionOne.votes
				? question.optionOne.votes.length
				: 0,
		votes2 =
			question && question.optionTwo.votes
				? question.optionTwo.votes.length
				: 0,
		totalVotes = votes1 + votes2,
		percentage1 = ((votes1 / totalVotes) * 100).toFixed(1),
		percentage2 = ((votes2 / totalVotes) * 100).toFixed(1);
	return {
		answered,
		question,
		percentage1,
		percentage2,
		users,
		votes1,
		votes2,
		totalVotes,
		id,
		authedUser,
	};
}
export default connect(mapStateToProps)(Questionpage);
