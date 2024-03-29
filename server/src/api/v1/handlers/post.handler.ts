import Post from "../models/post.model";
import User from "../models/user.model";
import IPost from "../interfaces/post.interface";
import IComment from "../interfaces/comment.inteface";

// CREATE POST
const createPostHandler = async (post: IPost) => {
  const newPost = new Post(post);
  try {
    const savedPost = await newPost.save();
    console.log(`Post successfully created: ${savedPost}`);
    return { message: savedPost, status: 200 };
  } catch (err) {
    console.log(err);
    return { message: err, status: 500 };
  }
};

// UPDATE POST
const updatePostHandler = async (postID: string, postUpdate: IPost) => {
  try {
    const post = await Post.findById(postID);
    // if (post && post.userID === postUpdate.userID) {
    if (post) {
      await post.updateOne({ $set: postUpdate });
      return {
        message: "The post has been updated successfully.",
        status: 200,
      };
    } else {
      console.log("HERE");
      return { message: "You can update only your posts.", status: 403 };
    }
  } catch (err) {
    console.log(err);
    return { message: err, status: 500 };
  }
};

// DELETE POST
const deletePostHandler = async (
  postID: string,
  userID: string
  // photoPublicID: string
) => {
  try {
    const post = await Post.findById(postID);
    if (post && post.userID === userID) {
      await post.deleteOne();
      return {
        message: "The post has been successfully deleted.",
        status: 200,
      };
    } else {
      return { message: "You can delete only your posts.", status: 403 };
    }
  } catch (err) {
    console.log(err);
    return { message: err, status: 500 };
  }
};

// LIKE / DISLIKE POST
const likePostHandler = async (postID: string, userID: string) => {
  try {
    const post = await Post.findById(postID);
    if (!post?.likes?.includes(userID)) {
      await post?.updateOne({ $push: { likes: userID } });
      return { message: "The post has been liked", status: 200 };
    } else {
      await post.updateOne({ $pull: { likes: userID } });
      return { message: "The post has been disliked", status: 200 };
    }
  } catch (err) {
    console.log(err);
    return { message: err, status: 500 };
  }
};

// GET POST
const getPostHandler = async (postID: string) => {
  try {
    const post = await Post.findById(postID);
    console.log(post);
    return { message: post, status: 200 };
  } catch (err) {
    console.log(err);
    return { message: err, status: 500 };
  }
};

// GET ALL TIMELINE POSTS
const getPostsHandler = async (userID: string) => {
  try {
    const currentUser = await User.findById(userID);
    const userPosts: IPost[] = await Post.find({ userID: currentUser?._id });
    //@ts-ignore
    const followingPosts: IPost[] =
      //@ts-ignore
      await currentUser?.following?.map((followID) => {
        return Post.find({ userID: followID });
      });
    // const followingPosts: IPost[] = await Promise.all(
    //   //@ts-ignore
    //   currentUser?.following?.map((followID) => {
    //     return Post.find({ userID: followID });
    //   })
    //   );
    console.log(`following: ${followingPosts}`);
    console.log(`Returning: ${userPosts.concat(...followingPosts)}`);
    return { message: userPosts.concat(...followingPosts), status: 200 };
  } catch (err) {
    console.log(err);
    return { message: err, status: 500 };
  }
};

// GET ALL USER TIMELINE POSTS
const getUserPostsHandler = async (id: string) => {
  try {
    // const currentUser: IUser | null = await User.findOne({ _id });
    // const userPosts: IPost[] = await Post.find({ userID: currentUser?._id });
    const userPosts: IPost[] = await Post.find({ userID: id });
    return { message: userPosts, status: 200 };
  } catch (err) {
    console.log(err);
    return { message: err, status: 500 };
  }
};

// GET ALL USER TIMELINE POSTS
const getAllPostsHandler = async () => {
  try {
    const posts: IPost[] = await Post.find({});
    return { message: posts, status: 200 };
  } catch (err) {
    console.log(err);
    return { message: err, status: 500 };
  }
};

// CREATE COMMENT
const createComment = async (comment: IComment) => {
  try {
    const post = await Post.findById(comment.postID);
    await post?.updateOne({ $push: { comments: comment } });
    return { message: "You've commented on the post.", status: 200 };
  } catch (err) {
    console.log(err);
    return { message: err, status: 500 };
  }
};

export {
  createPostHandler,
  updatePostHandler,
  deletePostHandler,
  likePostHandler,
  getPostHandler,
  getPostsHandler,
  getUserPostsHandler,
  getAllPostsHandler,
  createComment,
};
