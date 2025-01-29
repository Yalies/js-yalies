const fetch = require('node-fetch');

const API_BASE_URL = 'https://api.yalies.io/v2/';

class API {
    constructor(key) {
        this.key = key;
    }
    post(endpoint, body) {
        let url = new URL(API_BASE_URL + endpoint);
        return fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.key,
            },
            body: JSON.stringify(body),
        }).then(response => response.json());
    }
    people(criteria) {
        return this.post('people', criteria);
    }
}

exports.API = API;
