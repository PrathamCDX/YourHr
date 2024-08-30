import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

export const uploadFileCloudinary = async (localFilePath) => {
  try {
    const result = await cloudinary.uploader.upload(localFilePath);
    return result.secure_url;
  } catch (e) {
    return e;
  }
};
