const jwt = require("jsonwebtoken");
const secret_key= process.env.SECRET_KEY

const createUserToken=(payload=()=>{})=>{
    return jwt.sign(payload,secret_key,{ expiresIn: '1h' })
}

const verifyToken=(token)=>{
    try {
        return jwt.verify(token,secret_key);
    } catch (error) {
        return null;
    }
}
module.exports={
    createUserToken,verifyToken
}