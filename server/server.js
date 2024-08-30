import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRouter from "./Routes/authRoute.js";
import cors from "cors";

dotenv.config();
const app = express();
const EXPRESS_PORT = 7777;
app.use(express.json());
app.use(cors());
app.use("/auth", authRouter);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Database connected");
    app.listen(EXPRESS_PORT, () => {
      console.log(`Server running  on ${EXPRESS_PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
