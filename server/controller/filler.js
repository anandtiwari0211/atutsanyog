const Filler = require('../model/filler');

const create = async (req, res, next) => {

  if(!req.body.name) return res.send({ auth: true, message: "name is required." });

  try{
    await Filler.sync();
    const filler = await Filler.create({
      name: req.body.name,
    })
    res.send({ auth: true, filler });
  }
  catch(err){
    console.log(err);
  }
}


module.exports = { create };
