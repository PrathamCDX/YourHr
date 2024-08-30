import mongoose from "mongoose";

const { Schema } = mongoose;

const UserDataSchema = new Schema({
  name: String,
  phone: Number,
  email: String,
  resume: String,
});

export const userDataSchema = mongoose.model("userDataSchema", UserDataSchema);
// const user = new User({
//   name: "Bill",
//   email: "bill@initech.com",
//   avatar: "https://i.imgur.com/dM7Thhn.png",
// });
// await user.save();
