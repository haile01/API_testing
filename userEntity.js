const sequelize = require('./database');
const { Models, DataTypes } = require('sequelize');

const User = sequelize.define('user', {
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	},
	username: DataTypes.TEXT,
	email: DataTypes.TEXT,
	password: DataTypes.TEXT,
	fullname: DataTypes.TEXT,
	address: DataTypes.TEXT,
	school: DataTypes.TEXT,
	officialContestant: DataTypes.TEXT,
	officialStudent: DataTypes.TEXT,
	createdAt: DataTypes.DATE,
	updatedAt: DataTypes.DATE,
});

sequelize.sync({ force: true }).then(() => console.log('User table created'));

module.exports = User;
