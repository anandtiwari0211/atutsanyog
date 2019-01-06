const Sequelize = require('sequelize');
const sequelize = require('../db');

const Caste = sequelize.define('caste', {
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },

  name: {
    type: Sequelize.STRING,
    unique: true,
  },
  status: {
    type: Sequelize.ENUM,
    values: ['active', 'inactive'],
    defaultValue: 'active',
  }

});

module.exports = Caste;
