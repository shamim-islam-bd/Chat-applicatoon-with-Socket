// Enternal imports
const express = require('express');

//internal imports
const {getUsers} = require('../controller/usersControler')
const decorateHtmlResponse = require('../middlewares/common/decorateHtmlResponse')

const router = express.Router();


// Users page
router.get("/", decorateHtmlResponse("users"), getUsers);

module.exports = router;