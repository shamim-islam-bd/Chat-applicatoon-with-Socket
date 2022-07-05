// Enternal imports
const express = require('express');
// express validator
const {check} = require("express-validator");

//internal imports
const {getUsers, addUser, removeUser} = require('../controller/usersControler')
const decorateHtmlResponse = require('../middlewares/common/decorateHtmlResponse');
const avarterUpload = require('../middlewares/users/avatarupload');
const {
    addUserValidators,
    addUserValidationHandler,
  } = require("../middlewares/users/addUserValidators");

const router = express.Router();


// Users page
router.get("/", decorateHtmlResponse("users"), getUsers);
 

// add user
router.post(
    "/",
    avarterUpload,
    addUserValidators,
    addUserValidationHandler,
    addUser
  );
  
  // remove user
  router.delete("/:id", removeUser);
  

module.exports = router;