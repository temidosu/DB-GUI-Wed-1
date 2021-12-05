import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { AccountRepository } from '../api/accountRepository';


export class Register extends React.Component {

	accountRepository = new AccountRepository();

	constructor(props) {
		super(props)
		this.state = {
			username: "",
			password: "",
			email: "",
			validation: true,
			registered: false
		};
	}

	async handleSubmit(event) {
		console.log("test")
        event.preventDefault();
        if(this.validate()){
			this.setState({validation: true})
			let account = {
				userName: this.state.username,
				userPass: this.state.password,
				userEmail: this.state.email
			};

			this.setState({
				username: "",
				password: "",
				email: ""
			})

			this.accountRepository.register(account).then(res => {
                this.setState({registered: true})
            });
			return (<Navigate to="/login"/>)
        }
        else{
          this.setState({validation: false})
			console.log("true")
		}
	}

	validateEmail() {
		let emailPattern = /[\w]+@[\w]+\.[\w]{2,}/;
		if (emailPattern.test(this.state.email))
			return true;
		else if (this.state.email === ""){
			return true
		}
			return false;
	}

	validate() {

		if (this.state.username === "" || this.state.password=== "" || this.state.email === ""){
			return false
		}
		else{
			return true
		}
    }

	render(){

		return (
			<div>
			{sessionStorage.getItem("isAuthenticated") === "true" &&
					(<Navigate to="/"/>)}
			
				<form className="container col-sm-9 col-md-7 col-lg-3 mt-5 mx-auto border-0">
				{ this.state.validation ?  "":<div class="form-control is-invalid">Invalid Registration: Empty Form Field</div> }
				{ this.state.registered && (<Navigate to="/login"/>)}
					<h1 class="text-muted" >Create an Account</h1>
					<div className="form-label-group required">
						<label label for="exampleFormControlInput1" class="form-label">Username</label>
						<input type="text" id="username" className="form-control" value={this.state.username} onChange={event => this.setState({ username: event.target.value })} />
					</div>
					<div className="form-label-group required">
						<label htmlFor="email">Email</label>
						<input value={this.state.email} id="email" type="text" className={`form-control ${!this.validateEmail() && "is-invalid"}`} onChange={event => this.setState({ email: event.target.value })} />
					</div>
					<div className="form-label-group required">
						<label htmlFor="password">Password</label>
						<input value={this.state.password} id="password" className="form-control" type="password" onChange={event => this.setState({ password: event.target.value })}/>
					</div>
					<div  className="text-center mt-5">
						<button type="submit" onClick={event => this.handleSubmit(event)} className="btn btn-info" >Submit </button>
					</div>
				</form>
			</div>
		);
	}
}


export default Register;