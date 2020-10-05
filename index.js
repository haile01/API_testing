'use strict'
require('dotenv').config({ silent: true });
const express = require('express');
const app = express();
const User = require ('./UserEntity');

const payload = {
                username: 'hai',
                password: 'hai',
                id: '123',
                email: 'example@gmail.com',
                fullname: 'hai',
                address: 'Earth',
                school: 'Life',
                officialContestant: 'abc',
                officialStudent: 'xyz',
        }; 

const setup = () => {
	const port = process.env.PORT | 3000;

	//setTimeout(() => User.create(payload).then(res => console.log(res)), 3000);

	app.post('/register', async (req, res) => {
		const payload = req.body;
		let { username } = payload;
		let users = await User.find({ username })
		if (users.length !== 0) {
			return res.send({
				statusCode: 409,
			})
		}
		await User.create(payload);
		return res.send({
			statusCode: 200,
		})
	});

	app.listen(port, () => {
		console.log(`Server is running at localhost:${port}`);
	});
}

setup();
