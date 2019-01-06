// const uniqueId = require('../macidgenerator');
const Caste = require('../model/caste');

const create = async (req, res, next) => {

  if(!req.body.name) return res.send({ auth: true, message: "name is required." });

  try{
    await Caste.sync();
    const caste = await Caste.create({
      name: req.body.name,
    })
    res.send({ auth: true, caste });
  }
  catch(err){
    console.log(err);
  }
}

const getAllCaste = async (req, res, next) => {

  try{
    let caste;
    if(req.query.name){
      caste = await Caste.find({
        where: {
            name: req.query.name
          }
      });
    }
    else{
      caste = await Caste.findAll(
        {
        where:{
          id:{
            [Op.ne]: req.Id
          }
        }
      });
    }

    res.send({ auth: true, caste });
  }
  catch(err){
    console.log(err);
  }
}

module.exports = { create };
