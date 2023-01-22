import mongoose from "mongoose";
import IUser from "../interfaces/user.interface";

const userSchema = new mongoose.Schema<IUser>(
  {
    firstName: {
      type: String,
      required: false,
      default: "",
    },
    lastName: {
      type: String,
      required: false,
      default: "",
    },
    username: {
      type: String,
      required: true,
      min: 3,
      max: 20,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    profilePicture: {
      type: String,
      default: "",
    },
    coverPicture: {
      type: String,
      default: "",
    },
    followers: {
      type: Array,
      default: [],
    },
    followingUsers: {
      type: Array,
      default: [],
    },
    followingTags: {
      type: Array,
      default: [],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    description: {
      type: String,
      max: 250,
      default: "",
    },
    location: {
      type: String,
      max: 50,
      default: "",
    },
    refreshToken:{
      type:String,
    }
  },
  { timestamps: true }
);

const userModel = mongoose.model("User", userSchema);

export default userModel;
