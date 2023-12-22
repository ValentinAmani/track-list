import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../../config";
import User from "../../models/user";

export const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(400).end();
  }

  jwt.verify(token, SECRET_KEY, async (error, u) => {
    if (error) {
      return res.status(400).end();
    }

    const user = await User.findOne({ _id: u.id });
    req.user = user;
    next();
  });
};
