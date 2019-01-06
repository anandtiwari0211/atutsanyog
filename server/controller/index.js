const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const userController = require('./user');
const dropdownController = require('./filler');
const casteController = require('./caste');
const verifyToken = require('../auth/verifyToken');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.post('/user/register', userController.register);

router.post('/dropdown/filler', dropdownController.create);

 router.post('/dropdown/education', userController.education);

 router.post('/dropdown/state', userController.state);

router.post('/dropdown/height', userController.height);

router.post('/dropdown/feedback', userController.feedback);

router.post('/user/login', userController.login);

router.put('/users/:id', verifyToken, userController.update);

router.delete('/users/:id', verifyToken, userController.deleteUser);

router.get('/users/me', verifyToken, userController.getUser);

router.get('/users', verifyToken, userController.getAllUser);

router.get('/users/:userid', verifyToken, userController.getUserById);

router.post('/caste/create', casteController.create);

// router.get('/caste', casteController.getAllCaste);

module.exports = router;
