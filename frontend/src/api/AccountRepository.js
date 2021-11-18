import axios from 'axios';

export class AccountRepository{
	
	url = ""
	
	login(params) {
        let config = this.config;
        if (params) {
            config.params = params;
        }

        return new Promise((resolve, reject) => {
            axios.get(`${this.url}`, this.config)
                .then(x => resolve(x.data))
                .catch(x => {
                    alert(x);
                    reject(x);
                })
        });
    }
}