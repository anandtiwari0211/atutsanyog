const Sequelize = require('sequelize');
const sequelize = require('../db');

const Feedback = sequelize.define('feedback', {
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  name: {
    type: Sequelize.STRING,
    unique: true,
  },
  mobilenumber: {
    type: Sequelize.STRING,
    unique: true,
  },
  message: {
    type: Sequelize.STRING,
    unique: true,
  }
});

module.exports = Feedback;
