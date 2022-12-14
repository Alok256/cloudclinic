const jwt = require('jsonwebtoken');
const User = require('../models/User');
const dotenv = require('dotenv');
dotenv.config({ path: './config/.env' });

module.exports = async (req, res, next) => {
  try {
    const token = req.header('Authorization');
   // const token =req.data.token
   
    if (!token) {
      return res.status(401).send('access denied');
    }

    const verified = jwt.verify(token, process.env.TOKEN_SECRET);

    const user = await User.findOne({
      _id: verified._id,
      'tokens.token': token,
    });

    req.token = token;
    req.user = user;
    next();
  } catch (err) {
    res.status(400).send('invalid token');
  }
};
