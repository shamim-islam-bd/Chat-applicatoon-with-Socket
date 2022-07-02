// External imports
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const path = require('path');
const cookieParser = require('cookie-parser');

// internal imports
const {notFound, errorHandler} = require('./middlewares/common/errorhandle')
const loginRouter = require('./router/loginRouter')
// const usersRouter = require('./router/usersRouter')
// const inboxRouter = require('./router/inboxRouter')

const app = express();
dotenv.config();

//1. Database connection
mongoose.connect(process.env.MONGO_CONNECTION)
   .then(()=>{console.log("Database connection Succesful")})
   .catch((err)=>{console.log(err)})

//2. resquest parsers
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//3. Set view engine.
app.set("view engine", "ejs");


//4. set static folder
app.use(express.static(path.join(__dirname, "public")))


//5. parse cookies
app.use(cookieParser(process.env.COOKIE_SECRET));


//6. Routing
app.use('/', loginRouter);
// app.use('/users', usersRouter);
// app.use('/inbox', inboxRouter);


//7. 404 Error handling.
app.use(notFound)

//Common error handling.
app.use(errorHandler)


app.listen(process.env.PORT, () =>{
    console.log(`App listening to ${process.env.PORT}`)
})