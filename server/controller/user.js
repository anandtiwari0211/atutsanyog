const Sequelize = require('sequelize');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../config');
const User = require('../model/user');
const Filler = require('../model/filler');
const Education = require('../model/education');
const State = require('../model/state');
const Height = require('../model/height');
const Feedback = require('../model/feedback');
const Op = Sequelize.Op;

const register = async (req, res) => {

  if(!req.body.name) return res.send({ auth:false, message:"name is required."});
  try{
    await User.sync();
    const user = await User.create({
      filler: req.body.filler,
      name: req.body.name,
      dob: req.body.dob,
      gender: req.body.gender,
      education: req.body.education,
      profession: req.body.profession,
      contact_number: req.body.contact_number,
      otp: req.body.otp,
      caste: req.body.caste,
      state: req.body.state,
      parmanent_address: req.body.parmanent_address,
      image: req.body.image,
      father_name: req.body.father_name,
      mother_name: req.body.mother_name,
      gotra: req.body.gotra,
      salary: req.body.salary,
      height: req.body.height,
      manglik: req.body.manglik,
      castespecification: req.body.castespecification,
      brother: req.body.brother,
      sister: req.body.sister,
      job_place: req.body.job_place,
      jobsector: req.body.jobsector,
      anyproof: req.body.anyproof,
      marriage: req.body.marriage,
      status: req.body.status,
      paymentstatus: req.body.paymentstatus,
      messagestatus: req.body.messagestatus,
    })
    const token = jwt.sign({id: user.id}, config.secret, {expiresIn: 86400});
    res.send({ auth: true, token, message:"User Registration Successful." });
  }
  catch(err){
    res.send({ auth: false, message:"User Registration failed." });
    console.log(err);
  }
}


const education = async (req, res) => {

  if(!req.body.name) return res.send({ auth:false, message:"Select Any Education Field."});
  try{
    await Education.sync();
    const education = await Education.create({
      name: req.body.name,
        })
    res.send({ auth: true, education});
  }
  catch(err){
      console.log(err);
  }
}

const state = async (req, res) => {

  if(!req.body.name) return res.send({ auth:false, message:"Select Any State."});
  try{
    await State.sync();
    const state = await State.create({
      name: req.body.name,
        })
    res.send({ auth: true, state});
  }
  catch(err){
      console.log(err);
  }
}

const height = async (req, res) => {

  if(!req.body.height) return res.send({ auth:false, message:"Select Any height."});
  try{
    await Height.sync();
    const height = await Height.create({
      height: req.body.height,
        })
    res.send({ auth: true, height});
  }
  catch(err){
      console.log(err);
  }
}

const feedback = async (req, res) => {

  if(!req.body.name) return res.send({ auth:false, message:"fill name."});
  try{
    await Feedback.sync();
    const feedback = await Feedback.create({
      name: req.body.name,
      mobilenumber: req.body.mobilenumber,
      message: req.body.message
        })
    res.send({ auth: true, feedback});
  }
  catch(err){
      console.log(err);
  }
}






const login = async (req, res) => {

  try{
    if((req.body.username) && (req.body.password)){

      const user = await User.find({
        where: { username: req.body.username }
      });
      if(!user){
        res.send({auth: false, message: "no user was found."});
        return
      }
      const passwordIsValid = bcrypt.compareSync(req.body.password,user.password);
      if(!passwordIsValid){
        res.send({auth: false, message: "Username or password incorrect"});
        return
      }
      const token = jwt.sign({ id: user.id }, config.secret, {expiresIn: 86400});
      res.send({auth: true, token , user});
    }
    else{
      res.send({auth: false, message: "please provide the credentials."});
    }
  }
  catch(err){
    console.log(err);
  }
}

const update = async (req, res, next) => {

  try{
    if(!req.params.id) res.send({auth: false, message: "Please provide id for update."});

    await User.update({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      birthDate: req.body.birthDate,
    },
      {
        where: { id: req.userId }
      });

    res.send({ auth: true, message: "user updated"});
  }
  catch(err){
    console.log(err);
  }
}

const deleteUser = async (req, res, next) => {

  try{
    if(!req.params.id) res.send({auth: false, message: "Please provide id for update."});

    await User.destroy(
      {
        where: { id: req.userId }
      });

    res.send({ auth: true, message: "user deleted"});
  }
  catch(err){
    console.log(err);
  }
}

const getUser = async (req, res, next) => {

  try{
    const user = await User.find(
      {
        where: { id: req.userId }
      });

    res.send({ auth: true, user });
  }
  catch(err){
    console.log(err);
  }
}

const getAllUser = async (req, res, next) => {

  try{
    let users;
    if(req.query.username){
      users = await User.find({
        where: {
            username: req.query.username
          }
      });
    }
    else{
      users = await User.findAll(
        {
        where:{
          id:{
            [Op.ne]: req.userId
          }
        }
      });
    }

    res.send({ auth: true, users });
  }
  catch(err){
    console.log(err);
  }
}

const getUserById = async (req, res, next) => {

  try{
    const user = await User.find({
      where: {
          id: parseInt(req.params.userid)
        }
    });

    res.send({ auth: true, user });
  }
  catch(err){
    console.log(err);
  }
}

module.exports = { register, education , state , height, feedback , login, update, deleteUser, getUser, getAllUser, getUserById };
