// middleware/authMiddleware.js
import Jwt from 'jsonwebtoken';
import User from '../models/UserModel.js';

export async function auth(req, res, next) {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');

    if (!token) {
      return res.status(401).send({ error: 'Unauthorized: No token provided' });
    }

    const decoded = Jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({ _id: decoded.userId });

    if (!user) {
      return res.status(401).send({ error: 'Unauthorized: Invalid token' });
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(401).send({ error: 'Unauthorized: Invalid token' });
  }
}
