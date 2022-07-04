// Enternal imports
const express = require('express');

//internal imports
const { getInbox } = require('../controller/inboxControler')
const decorateHtmlResponse = require('../middlewares/common/decorateHtmlResponse')


const router = express.Router();


// inbox page
router.get("/", decorateHtmlResponse("inbox"), getInbox);

module.exports = router;