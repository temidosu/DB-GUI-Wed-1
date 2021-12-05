import React from 'react';
import { Navigate } from 'react-router-dom';
import { AccountRepository } from '../api/accountRepository';
import './loginRegister.css'

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
				<p className="form-control is-invalid">Username or password is blank</p>
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
				<div className="LogIn">
				<form className="col-lg-3 mb-2 mt-5 mx-auto" onSubmit={e => this.login(e)}>
					<h1 className="text-center">Sign In</h1> 
					{this.state.invalidCred && <p className="form-control is-invalid"> Invalid username or password</p>}
					<label >Username</label>
						<input type="text" id="username" className="form-control form-control-lg" value={this.state.username} onChange={e => this.setState({ username: e.target.value })} />
					<label className="mt-2">Password</label>
						<input type="password" id="password" className="form-control form-control-lg" value={this.state.password} onChange={e => this.setState({ password: e.target.value })} />
					<div className="text-center mt-3">
						<button type="submit" className="btn btn-success" onClick={e => this.login(e)}> Login </button>
						<div className="text center col-lg-7 mt-2 mx-auto">
							<a href="/register">Register For An Account</a>
						</div>
					</div>	
				</form>
				</div>
			</>
		);
	}
}
//Restructured code->look commit
export default LoginForm;