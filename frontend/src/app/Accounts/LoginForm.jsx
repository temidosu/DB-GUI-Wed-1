import React from 'react';
import { Navigate } from 'react-router-dom';
import './accounts.css';
import { AccountRepository } from '../api/accountRepository';

export class LoginForm extends React.Component {

	state = {
		username: "",
		password: "",
		invalidCred: false,
		jwtValue: "",
	}

	accountRepository = new AccountRepository();


	async testLOL(event) {
		const response = await this.accountRepository.getProfiles();
		console.log(response)
	}

	async login(event) {
		// Authenticate user

		event.preventDefault();
		event.stopPropagation();

		if (!(this.state.username && this.state.password)) {
			this.setState({ invalidCred: true });
			return;
		}

		const response = await this.accountRepository.login(this.state.username, this.state.password);

		if (!response || response === 'error') {
			return;
		}

		if (response.status) {

			sessionStorage.setItem("isAuthenticated", "true");
			sessionStorage.setItem("userId", response.account.userID);
			console.log(response.account.userID)

			this.setState({
				username: "",
				password: "",
				invalidCred: false
			});
		}
		else {
			this.setState({ invalidCred: true });
		}
	}

	render() {
		if (sessionStorage.getItem("isAuthenticated") === "true") {
			return <Navigate to="/" />;
		}
		return (
			<>
				<form id="account-form" className="col-sm-9 col-md-7 col-lg-4 mt-5 mx-auto border-0" onSubmit={e => this.login(e)}>
					<div className="text-center"> </div><br></br>
					<h1 className="text-center">Sign In</h1>
					<p>{this.state.jwtValue}</p>
					{this.state.invalidCred &&
						<p className="alert alert-danger">
							Invalid username or password
						</p>}
					<div className="form-label-group">
						<label htmlFor="username">Username</label>
						<input
							type="text"
							id="username"
							className="form-control"
							value={this.state.username}
							onChange={e => this.setState({ username: e.target.value })} />
					</div>
					<div className="form-label-group mt-3">
						<label htmlFor="password">Password</label>
						<input
							type="password"
							id="password"
							className="form-control"
							value={this.state.password}
							onChange={e => this.setState({ password: e.target.value })} />
					</div>

					<div id="login-button-container" className="text-center">
						<button
							type="submit"
							className="btn btn-info"
							onClick={e => this.login(e)}>
							Login
						</button>
					</div>

					<div id="register-button-container" className="text-center">
						<span>Need an account? </span>
						<a href="/register">Register here</a>
					</div>
				</form>
			</>
		);
	}
}
export default LoginForm;