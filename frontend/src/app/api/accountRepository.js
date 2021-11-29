import { hostname } from './repositoryConfig';

import axios from 'axios';

function error(err) {
	console.error(err);
	alert("Error:\n" + err);
}

export class AccountRepository {

	getProfiles() {
        return new Promise((resolve, reject) => {
            axios.get(hostname + '/api/users')
                .then(response => {
                    resolve(response.data);
                })
                .catch(err => {
                    console.error(err);
                    reject(err);
                });
        })
    }


	login(username, password) {
		return new Promise((resolve, reject) => {
			axios.post(hostname + '/api/login', { username, password })
				.then(response => {
					resolve({ status: response.data.status, account: response.data.account });
					console.log(response)
				})
				.catch(err => {
					error(err);
					resolve({ status: false });
				});
		});
	}

	register(account) {
		return new Promise((resolve, reject) => {
			axios.post(hostname + '/api/register', { ...account })
				.then(response => {
					resolve(response.data);
				})
				.catch(err => {
					error(err);
					resolve(undefined);
				});
		});
	}

	createRecipe(recipe) {
		return new Promise((resolve, reject) => {
			axios.post(hostname + '/recipes', recipe)
				.then(response => {
					resolve(response.data);
				})
				.catch(err => {
					error(err);
					resolve(undefined);
				});
		});
	}

	getUser(userID) {
		return new Promise((resolve, reject) => {
			axios.post(hostname + `/users/${userID}`)
				.then(response => {
					resolve(response);
				})
				.catch(err => {
					error(err);
					resolve(err);
				});
		});
	}

}

export default AccountRepository;