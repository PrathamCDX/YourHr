import express from "express";
import { uploadFile } from "../Controllers/uploadFileController.js";
import { signup } from "../Controllers/signupController.js";
import { login } from "../Controllers/loginController.js";
import { upload } from "../middleware/multer.js";

const authRouter = express.Router();
authRouter.post("/signup", signup);
authRouter.post("/login", login);
authRouter.post("/upload", upload.single("file"), uploadFile);

export default authRouter;
