const Sequelize = require('sequelize');
const sequelize = require('../db');

const Filler = sequelize.define('filler', {
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

module.exports = Filler;
