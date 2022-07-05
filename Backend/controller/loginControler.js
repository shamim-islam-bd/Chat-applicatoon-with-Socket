
// internal imorts.
const User = require('../model/People');
const bcrpty = require('bcrypt');
const jwt = require('jsonwebtoken');
const createHttpError = require('http-errors');


// get Login page 
function getLogin(req, res, next){
    res.render('index')
} 


//do login 
function doLogin(req, res, next){
    try {
        //find user who has the same username and password
        const user = await User.findOne({ 
            $or: [{username: req.body.username}, {password: req.body.password}]
         });
        if(user && user._id){
            //if user is found.
            const isValidPassword = await bcrpty.compare(
                req.body.password,
                user.password
                );
        }  
        if(isValidPassword){
            //prepare the user object to generate token and send it to the client side. 
            const userObj = {
                username: user.name,
                mobile: user.mobile,
                email: user.email,
                role: "user"
            };

            //generate token
            const token = jwt.sign(userObj, process.env.JWT_SECRET, {expiresIn: '1h'});
            res.json({
                success: true,
                token: token
            });

            // set cookie with token
            res.cookie(process.env.COOKIE_NAME, token, {
                maxAge: 3600000,
                httpOnly: true,
                signed: true, //for encripted.
            });

            //set logged in user local identifier. 
            res.locals.user = userObj;

            res.render('inbox');

        } else{
            //if user is not found.
           throw createHttpError('Invalid username or password');
        }

    } catch (error) {
        res.render('index', {
            data: {
               username: req.body.username,
            },
            error: {
                common: {
                    message: error.message,
                }
            }
        });
    }
}


module.exports ={
    getLogin,
};