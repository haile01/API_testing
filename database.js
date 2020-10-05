require('dotenv').config({ silent: true });
const Sequelize = require('sequelize');
const { dbUser, dbPassword, dbHost, dbPort, dbName } = process.env
const sequelize = new Sequelize(`mysql://${dbUser}:${dbPassword}@${dbHost}:${dbPort}/${dbName}`);

(async () => {
	try {
		await sequelize.authenticate();
		console.log(`Connected to mysql://${dbUser}:${dbPassword}@${dbHost}:${dbPort}/${dbName}`);
	}
	catch (err) {
		console.log("Cant connect to database", err);
	}
})()

module.exports = sequelize;
