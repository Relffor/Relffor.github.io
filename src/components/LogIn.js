import React, { Component } from "react";
import { setAuthedUser, resetAuthedUser } from "../actions/authedUser";
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";

class LogIn extends Component {
	state = {
		id: null,
		toHome: false,
	};
	handleChange = (e) => {
		const user_id = e.target.value;
		this.setState(() => ({
			id: user_id,
		}));
	};
	handleClick = (e) => {
		const { id } = this.state,
			{ dispatch } = this.props;
		dispatch(setAuthedUser(id));
		this.setState(() => ({
			toHome: true,
		}));
	};
	componentDidMount() {
		this.props.dispatch(resetAuthedUser());
	}
	render() {
		const { users } = this.props,
			{ toHome, id } = this.state,
			selection = id ? id : "-1",
			{ from } = this.props.location.state || {
				from: { pathname: "/home" },
			};
		if (toHome) {
			return <Redirect to={from} />;
		}
		return (
			<div className="log-in">
				<h3>
					Welcome to <span>Would You Rather</span>App !
				</h3>
				<p>Please select a user to log-in</p>
				<select onChange={(e) => this.handleChange(e)} value={selection}>
					<option disabled value="-1">
						Select a user...
					</option>
					{Object.keys(users).map((key) => (
						<option value={key} key={key}>
							{users[key].name}
						</option>
					))}
				</select>
				<button onClick={(e) => this.handleClick(e)} disabled={id === null}>
					Log-in
				</button>
			</div>
		);
	}
}

function mapStateToProps({ users }) {
	return {
		users,
	};
}

export default withRouter(connect(mapStateToProps)(LogIn));
