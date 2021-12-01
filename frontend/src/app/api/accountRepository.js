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

	getRecipes() {
		return new Promise((resolve, reject) => {
			axios.get(hostname + '/api/recipes')
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
			axios.post(hostname + '/api/register', account)
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
			axios.post(hostname + '/api/recipes', recipe)
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
			axios.get(hostname + `/api/user/${userID}`)
				.then(response => {
					resolve(response.data);
				})
				.catch(err => {
					error(err);
					resolve(err);
				});
		});
	}

	getRecipe(recipeId) {
		return new Promise((resolve, reject) => {
			axios.get(hostname + `/api/recipes/${recipeId}`)
				.then(response => {
					if (response.data.length > 0) {
						resolve(response.data)
					}
					else {
						resolve(undefined);
					}
				})
				.catch(err => {
					error(err);
					reject(err);
				});
		});
	}

	getAllRecipes() {
		return new Promise((resolve, reject) => {
			axios.get(hostname + '/api/recipes')
				.then(response => {
					if (response.data.length > 0) {
						resolve(response.data)
					}
					else {
						resolve(undefined);
					}
				})
				.catch(err => {
					error(err);
					reject(err);
				});
		});

	}



	postRecipe(recipe) {
		
        return new Promise((resolve, reject) => {
            axios.post(hostname + `/api/recipes`, { ...recipe})
                .then(response => {
                    resolve(response.data);
                })
                .catch(err => {
                    debugger;
                    error(err);
                    reject(err);
                });
        });
    }


	getReview(recipeId) {
		return new Promise((resolve, reject) => {
			axios.get(hostname + `/api/reviews/${recipeId}`)
				.then(response => {
					if (response.data.length ) {
						resolve(response.data)
					}
					else {
						resolve(undefined);
					}
				})
				.catch(err => {
					error(err);
					reject(err);
				});
		});
	}


	postReview(recipeID, userID, reviewRate){
		return new Promise((resolve, reject) => {
			axios.put(hostname + `/api/updateReview`, {recipeID, userID, reviewRate})
			.then(response => {
				resolve(response.data);
			})
			.catch(err => {
				debugger;
				error(err);
				reject(err);
			});
	});
	}



}

export default AccountRepository;