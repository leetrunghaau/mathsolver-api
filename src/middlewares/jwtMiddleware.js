// jwtMiddleware.js

const jwt = require('jsonwebtoken');
const secretKey = process.env.SECRET_KEY;


function verifyToken(req, res, next) {
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

module.exports = { verifyToken };
