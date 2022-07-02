const createError = require('http-errors');

// 404 handlers (Not found)
function notFound(req, res, next){
    next(createError(404, "Your requst content not found."));
}


//defult error handler
function errorHandler(err, req, res, next){
    //jhon html akare error pathabo tokon client a.
    res.locals.error =
     process.env.NODE_ENV === 'development' ? err : {message: err.message}

    res.status(err.status || 500);  

    // error with Json response.
    if(res.locals.html){
        // html response
        res.render("error", {
            title: "Error page"
        })
    }else{
        //Json response
        res.json(res.locals.error) 
    }
}

module.exports = {
    notFound,
    errorHandler
}