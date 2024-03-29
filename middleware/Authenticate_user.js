const jwt = require('jsonwebtoken');
//const userModel = require('../model/user_model');
const authenticateUser = require('../model/user_model');
require('dotenv').config();

// Middleware to sign JWT token
const signToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

// Middleware to verify JWT token
const isAuthenticUser = async (req, res, next) => {
    try {
      const token = req.headers.authorization;
  
      if (!token) {
        // Handle missing token
        return res.status(403).json({
          success: false,
          message: 'Please login to access this resource ',
        });
      }
  
      try {
        const decodedData = jwt.verify(token.split(' ')[1], process.env.JWT_SECRET);
        // token = "Bearer fuhdgjvkfuibrujwjbfnvc"
        // const arr = ["Bearer", "fuhdgjvkfuibrujwjbfnvc"]
        console.log(decodedData, 'decodedData ')
        const user = await authenticateUser.findById(decodedData.userId);
  
        if (!user) {
          // Handle user not found
          return res.status(404).json({
            success: false,
            message: 'User not found ',
          });
        }
  
        req.user = user;
        next();
      } catch (error) {
        // Handle token verification error
        return res.status(400).json({
          success: false,
          message: 'Invalid token',
        });
      }
    } catch (error) {
      next(error);
    }
  };

module.exports = { signToken, isAuthenticUser };
