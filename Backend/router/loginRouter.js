// Enternal imports
const express = require('express');

//internal imports
const {getLogin, doLogin, logout} = require('../controller/loginControler')
const decorateHtmlResponse = require('../middlewares/common/decorateHtmlResponse');
const { doLoginValidator, dologinValidatorHandler } = require('../middlewares/login/loginValidator');

const router = express.Router();


// login page
router.get("/", decorateHtmlResponse("Login"), getLogin);

// process login
router.post("/",   
  decorateHtmlResponse("Login"),
  doLoginValidator,
  dologinValidatorHandler,
  doLogin
  );


// logout
router.delete("/", logout)

module.exports = router;