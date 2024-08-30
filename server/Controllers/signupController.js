import bcrypt from "bcrypt";
import { userSchema } from "../schema/userSchema.js";

export const signup = async (req, res) => {
  try {
    const salt = 12;
    const email = req.body.email;
    const password = req.body.password;
    const hashedPassword = await bcrypt.hash(password, salt);
    const ifUser = await userSchema.find({ email });

    if (ifUser.length < 1) {
      const userCreated = await userSchema.create({
        email,
        password: hashedPassword,
      });

      return res.send({
        success: true,
        status: 200,
        message: "New user created",
        user: userCreated,
      });
    }

    return res.send({
      success: false,
      status: 200,
      message: "user already exists",
      user: ifUser,
    });
  } catch (e) {
    return res.send({
      success: false,
      status: 500,
      message: e.message,
    });
  }
};
