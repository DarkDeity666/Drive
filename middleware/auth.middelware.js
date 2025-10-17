import jwt from 'jsonwebtoken';

function authMiddleware(req,res,next){
    const token = req.cookies.token;
    if(!token){
        return res.status(401).json({
            message: "unauthorized access"
        });
    }
    try{
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decode;
        return next();
        
    } catch (error) {
        return res.status(401).json({
            message:"Invalid Token"
        });
    }
}

export default authMiddleware;