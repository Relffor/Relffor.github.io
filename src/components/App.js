import React, { Component, Fragment } from "react";
import LoadingBar from "react-redux-loading";
import LogIn from "./LogIn";
import Home from "./Home";
import Leaderboard from "./Leaderboard";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { handleInitialData } from "../actions/shared";
import { connect } from "react-redux";
import NavBar from "./NavBar";
import QuestionPage from "./QuestionPage";
import NewQuestion from "./NewQuestion";
import ErrorNotFound from "./ErrorNotFound";
import PrivateRoute from "./PrivateRoute";

class App extends Component {
	componentDidMount() {
		this.props.dispatch(handleInitialData());
	}
	render() {
		const { authedUser } = this.props;
		return (
			<Router>
				<Fragment>
					<LoadingBar />
					{authedUser !== null && <NavBar />}
					<div className="app">
						<Route path="/" exact component={LogIn}></Route>
						<PrivateRoute path="/home" component={Home}></PrivateRoute>
						<PrivateRoute
							path="/leaderboard"
							component={Leaderboard}
						></PrivateRoute>
						<PrivateRoute
							path="/questions/:id"
							component={QuestionPage}
						></PrivateRoute>
						<PrivateRoute path="/add" component={NewQuestion}></PrivateRoute>
						<Route path="/not-found" component={ErrorNotFound}></Route>
					</div>
				</Fragment>
			</Router>
		);
	}
}

function mapStateToProps({ authedUser }) {
	return {
		authedUser,
	};
}
export default connect(mapStateToProps)(App);
