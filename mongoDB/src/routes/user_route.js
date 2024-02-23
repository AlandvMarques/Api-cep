// const route = require('express').Router();
// const userController = require('../controllers/user_controller');

// route.get("/soma", userController.soma);


// module.exports = route;


// user_route.js

const express = require('express');
const userController = require('../controllers/user_controller');
const router = express.Router();

router.get('/soma', userController.soma);

module.exports = router;
