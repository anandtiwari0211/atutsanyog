const Sequelize = require('sequelize');
const sequelize = require('../db');

const User = sequelize.define('user', {
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  // username: {
  //   type: Sequelize.STRING,
  //   unique: true,
  // },
  filler: {
    type: Sequelize.STRING
  },
  name: {
    type: Sequelize.STRING
  },
  dob: {
    type: Sequelize.DATEONLY
  },
  gender: {
    type: Sequelize.INTEGER
  },
  education: {
    type: Sequelize.INTEGER
  },
  profession: {
    type: Sequelize.STRING
  },
  contact_number: {
    type: Sequelize.STRING
  },
  otp: {
    type: Sequelize.INTEGER
  },
  caste: {
    type: Sequelize.INTEGER
  },
  state: {
    type: Sequelize.INTEGER
  },
  parmanent_address: {
    type: Sequelize.TEXT
  },
  image: {
    type: Sequelize.STRING
  },
  father_name: {
    type: Sequelize.STRING
  },
  mother_name: {
    type: Sequelize.STRING
  },
  gotra: {
    type: Sequelize.STRING
  },
  salary: {
    type: Sequelize.STRING
  },
  height: {
    type: Sequelize.INTEGER
  },
  manglik: {
    type: Sequelize.INTEGER
  },
  castespecification: {
    type: Sequelize.STRING
  },
  brother: {
    type: Sequelize.STRING
  },
  sister: {
    type: Sequelize.STRING
  },
  job_place: {
    type: Sequelize.STRING
  },
  jobsector: {
    type: Sequelize.INTEGER
  },
  anyproof: {
    type: Sequelize.STRING,
    unique: true,
  },
  marriage: {
    type: Sequelize.INTEGER
  },
  status: {
    type: Sequelize.ENUM,
    values: ['active', 'inactive'],
    defaultValue: 'active',
  },
  paymentstatus: {
    type: Sequelize.ENUM,
    values: ['active', 'inactive'],
    defaultValue: 'active',
  },
  messagestatus: {
    type: Sequelize.ENUM,
    values: ['active', 'inactive'],
    defaultValue: 'active',
  }
});

module.exports = User;
