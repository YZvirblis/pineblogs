import mongoose from "mongoose";
import IPost from "../interfaces/post.interface";

const postSchema = new mongoose.Schema<IPost>(
  {
    userID: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      max: 500,
      default: "",
    },
    images: {
      type: String,
      default: "",
    },
    likes: {
      type: Array,
      default: [],
    },
    comments: {
      type: Array,
      default: [],
    },
    tags: {
      type: Array,
      default: []
    }
  },
  { timestamps: true }
);

const postModel = mongoose.model("Post", postSchema);

export default postModel;
