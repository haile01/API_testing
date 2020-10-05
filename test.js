'use strict'
const axios = require('axios').default;

let payload = {
		username: 'hai',
                password: 'hai',
                email: 'example@gmail.com',
                fullname: 'hai',
                address: 'Earth',
                school: 'Life',
                officialContestant: 'abc',
                officialStudent: 'xyz',
        };

axios.post('localhost:3000/register', payload).then(res => {
	console.log(res);
});
