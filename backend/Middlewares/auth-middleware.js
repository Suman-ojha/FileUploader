const { verifyToken } = require("../utils/jwt");

 
 
 const AuthMiddleware=(request,response,next)=>{
    const token=request.headers.authorization;
    // console.log({token});
    const payload=verifyToken(token);
    // console.log({payload});
    if(!payload){
        return response.status(401).json({
            message:"please Login"
        })
    }

    request.user = payload;
    next()
}
module.exports={
    AuthMiddleware,
}