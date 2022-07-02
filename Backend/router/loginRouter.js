// Enternal imports
const express = require('express');

//internal imports
const {getLogin} = require('../controller/loginControler')

const router = express.Router();


// login page
router.get("/", getLogin);

module.exports = router;