import bcrypt from "bcrypt";
import { userSchema } from "../schema/userSchema.js";

export const login = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    const user = await userSchema.findOne({ email });
    // return res.send({
    //   user: user,
    // });

    if (user) {
      const match = await bcrypt.compare(password, user.password);
      if (match) {
        return res.send({
          success: true,
          status: 200,
          message: "Logged in successfully",
        });
      } else {
        return res.send({
          success: false,
          status: 403,
          message: "Invalid credentials",
        });
      }
    } else {
      return res.send({
        success: false,
        status: 403,
        message: "Invalid credentials",
      });
    }
  } catch (e) {
    return res.send({
      success: false,
      status: 500,
      message: e.message,
    });
  }
};
