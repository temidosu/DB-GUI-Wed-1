import React from 'react';
import { Navigate } from 'react-router-dom';
import { AccountRepository } from '../api/accountRepository';

export class LoginForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: "",
			invalidCred: false,
			}
			
	}

	accountRepository = new AccountRepository();


	async testLOL(event) {
		const data = await this.accountRepository.getProfiles();
		console.log(data)
	}

	validation(){
		return this.state.username.length > 0 && this.state.password.length > 0;
	}

	async login(event) {
		event.preventDefault();
		event.stopPropagation();
		if (!this.validation()) {
			this.setState({ invalidCred: true });
			return <>
			<p className="alert alert-danger">Username or password is blank</p>
		</>;
		}

		const data = await this.accountRepository.login(this.state.username, this.state.password);

		if (!data || data === 'error') {
			return
		}

		else if (data.status) {
			sessionStorage.setItem("isAuthenticated", "true");
			sessionStorage.setItem("userId", data.account.userID);
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
				<form id="account-form" className="col-lg-3 mt-5 mx-auto" onSubmit={e => this.login(e)}>
					<h1 className="text-center">Sign In</h1>
					{this.state.invalidCred &&
						<p className="alert alert-danger">
							Invalid username or password
						</p>}
					<div className="form-label-group">
						<label >Username</label>
						<input
							type="text"
							id="username"
							className="form-control"
							value={this.state.username}
							onChange={e => this.setState({ username: e.target.value })} />
					</div>
					<div className="form-label-group">
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
							className="btn btn-primary"
							onClick={e => this.login(e)}>
							Login
						</button>
					</div>

					<div className="col-lg-7 mt-5 mx-auto">
						<a href="/register">Register For An Account</a>
					</div>
				</form>
			</>
		);
	}
}
export default LoginForm;