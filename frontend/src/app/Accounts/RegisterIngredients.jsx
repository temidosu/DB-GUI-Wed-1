import React from 'react';
import { Navigate } from 'react-router-dom';
import { AccountRepository } from '../api/accountRepository';

export class RegisteringIngredients extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			
			}
			
	}

	//accountRepository = new AccountRepository();


	

	render() {
		return (
            
			<>
            {sessionStorage.getItem("isAuthenticated") !== "true" &&
                (<Navigate to="/login"/>)}
			<form id="account-form" className="col-lg-3 mt-5 mx-auto">
                <p>hi</p>
            </form>
			</>
		);
	}
}
