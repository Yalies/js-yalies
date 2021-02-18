# yalies
[![NPM package summary for yalies](https://nodei.co/npm/yalies.png)](https://nodei.co/npm/yalies)

> A JavaScript interface to the [Yalies](http://yalies.co) [API](http://yalies.io/apidocs).

## Usage
First install with `npm` or your favorite package manager:
```sh
npm install yalies
```

Import into your project:
```js
const yalies = require('yalies');
// Alternative:
const API = require('yalies').API;
// If you choose this option, simply instantiate as `new API(...)` below.
```

Instantiate the API by passing your API key:
```js
const api = new yalies.API('api_key')
```
You'll want to store your in an environment variable or config file of some sort. At any rate, don't commit it to GitHub! :)

Finally, use the `people` method to query the API, passing an object containing any request criteria you wish, as explained in the [Yalies API documentation](https://yalies.io/apidocs).

```js
api.people({
    query: 'John',
    filters: {
        school_code: ['YC'],
        college: [
            'Grace Hopper',
            'Davenport'
        ],
        year: [2023, 2024],
        floor: 3,
        leave: [true]
    },
    page: 1,
    page_size: 10
}).then(people => {
    for (let person of people) {
        console.log(person.netid);
    }
});
```
Feel free to open an issue if you need help!

## Author
[Erik Boesen](https://github.com/ErikBoesen)
