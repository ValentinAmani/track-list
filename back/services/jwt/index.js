import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../../config";

export const createToken = (id) => {
  return jwt.sign({ id }, SECRET_KEY);
};
