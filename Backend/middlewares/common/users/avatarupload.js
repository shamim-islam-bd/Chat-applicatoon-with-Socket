
function avarterUpload(req, res, next){
   const upload = uploader (
    "avatar",
     ["image/jpeg", "image/jpg", "image/png"],
     10000,
     "only .jpeg jpg .png format allowed!"
   )

   // call the middleware function
  upload.any()(req, res, (err) => {
    if (err) {
      res.status(500).json({
        errors: {
          avatar: {
            msg: err.message,
          },
        },
      });
    } else {
      next();
    }
  });


} 
module.exports = avarterUpload;