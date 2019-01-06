const Sequelize = require("sequelize");
// const createDb = require('./connection');
let sequelize;

async function initializeDb () {
  try{
    sequelize = new Sequelize('atutsanyog_allsamaj', 'root', '', {
      host: 'localhost',
      dialect: 'mysql',
      // port: 3306,
    });
    await sequelize.authenticate();
  }
  catch(err){
    if(err.original.errno == 1049){
      // createDb();
    }
  }
}

initializeDb();
module.exports = sequelize;
