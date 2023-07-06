// jwtMiddleware.js
const jwt = require('jsonwebtoken');
const createError = require('http-errors')

const secretKey = process.env.SECRET_KEY;

const verifyAccessToken = async (req, res, next) => {
  if (!req.headers['authorization']) {
    return next(createError.Unauthorized())
  }
  const authHeader = req.headers['authorization'];
  const bearerToken = authHeader.split(' ');
  const token = bearerToken[1];
  jwt.verify(token, process.env.SECRET_KEY, (err, payload)=>{
    if(err){
      if(err.name === 'JsonWebTokenError'){
        return next(createError.Unauthorized());
      }
      return next(createError.Unauthorized(err.message));
      
    }
    req.payload =  payload;
    next();
  })

}



const createToken = async (payload) => {
  return jwt.sign(payload, secretKey, { expiresIn: '1h' });
}


const verifyToken = async (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).json({ message: 'Missing token' });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Invalid token' });
    }
    req.userId = decoded.userId;
    next();
  });
}



module.exports = {
  verifyAccessToken,
  createToken,
  verifyToken
};
