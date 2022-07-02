// Enternal imports
const express = require('express');

//internal imports
const {getinbox} = require('../controller/inboxControler')

const router = express.Router();


// inbox page
router.get("/", getinbox);

module.exports = router;