import mongoose from "mongoose";

const { Schema } = mongoose;

const UserSchema = new Schema({
  email: String,
  password: String,
});

export const userSchema = mongoose.model("userSchema", UserSchema);
