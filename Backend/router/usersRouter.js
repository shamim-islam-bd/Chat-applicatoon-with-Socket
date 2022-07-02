// Enternal imports
const express = require('express');

//internal imports
const {getUsers} = require('../controller/usersControler')

const router = express.Router();


// Users page
router.get("/", getUsers);

module.exports = router;