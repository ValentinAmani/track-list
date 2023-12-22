import bcrypt from "bcrypt";
import User from "../../../models/user";
import { createToken } from "../../../services/jwt";

export default async ({ body }, res, next) => {
  try {
    const user = await User.findOne({ email: body.email });

    if (user) {
      return res.status(401).json({
        success: false,
        message: "Utilisateur déjà enregistré.",
      });
    }

    const saltRounds = 8;
    const hashPassword = bcrypt.hashSync(body.password, saltRounds);

    const newUser = await User.create({
      userName: body.userName.trim(),
      email: body.email,
      password: hashPassword,
    });

    const token = createToken(newUser._id);

    return res.status(201).json({
      success: true,
      token: token,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};
