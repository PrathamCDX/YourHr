import { uploadFileCloudinary } from "../middleware/cloudinary.js";
import { userDataSchema } from "../schema/UserDataSchema.js";

export const uploadFile = async (req, res) => {
  try {
    // console.log("fileUploadController body:  ", req.body);
    // console.log("fileUploadController file path:  ", req.file.path);

    // console.log(req);
    // return res.send();
    const name = req.body.name;
    const phone = req.body.phone;
    const email = req.body.email;

    const localFilePath = req.file.path;
    // console.log(req.file);
    const cloudinary_secure_url = await uploadFileCloudinary(localFilePath);

    console.log(cloudinary_secure_url);
    const userDataCreated = await userDataSchema.create({
      name,
      phone,
      email,
      resume: cloudinary_secure_url,
    });
    return res.send({
      success: true,
      status: 200,
      message: "New user data created",
      user: userDataCreated,
    });
  } catch (err) {
    return res.status(500).send({
      success: false,
      status: 500,
      message: "uploadFileController:   " + err.message,
    });
  }
  // next();
};
