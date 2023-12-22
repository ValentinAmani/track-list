import bcrypt from "bcrypt";
import User from "../../../models/user";
import { createToken } from "../../../services/jwt";

export default async ({ body }, res, next) => {
  try {
    const user = await User.findOne({ email: body.email });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Utilisateur introuvable.",
      });
    }

    const match = await bcrypt.compare(body.password, user.password);

    if (!match) {
      return res.status(401).json({
        success: false,
        message: "Utilisateur introuvable.",
      });
    }

    const token = createToken(user._id);

    return res.status(200).json({
      success: true,
      token: token,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};
