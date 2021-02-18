const fetch = require('node-fetch');

HOST = 'https://yalies.io';
API_ROOT = '/api/'

class API {
    constructor(key) {
        this.key = key;
    }
    post(endpoint, body) {
        let url = new URL(HOST + API_ROOT + endpoint);
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
