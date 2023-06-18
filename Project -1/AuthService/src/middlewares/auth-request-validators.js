const validateUserAuth = (req,res,next) => {
    if(!req.body.email||!req.body.password){
        return res.status(400).json({
            success:false,
            data:{},
            message:"something went wrong",
            err:"Please provide email and password"
        })
    }
    next();
}

module.exports = {
    validateUserAuth
};