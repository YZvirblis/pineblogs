import { Request, Response, Router, NextFunction, request } from "express";
import {
  createPostHandler,
  updatePostHandler,
  deletePostHandler,
  likePostHandler,
  getPostHandler,
  getPostsHandler,
  getUserPostsHandler,
  getAllPostsHandler,
} from "../handlers/post.handler";
import authenticateToken from "../middlewares/middleware.auth";

const PostController = () => {
  const router = Router();
  router.post("/create/", authenticateToken, createPost);
  router.put("/update/:id", authenticateToken, updatePost);
  router.delete(
    "/delete/:postid/:userid/:publicid",
    authenticateToken,
    deletePost
  );
  router.put("/like/:id", authenticateToken, likePost);
  router.get("/get/:id", getPost);
  router.get("/feed/:id", authenticateToken, getPosts);
  router.get("/getuserposts/:id", authenticateToken, getUserPosts);
  router.get("/all/", getAllPosts)
  return router;
};

// CREATE POST
const createPost = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const post = request.body;
  const res: any = await createPostHandler(post);
  response.status(res.status).json(res.message);
};

// UPDATE POST
const updatePost = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const postUpdate = request.body;
  const postID = request.params.id;
  const res: any = await updatePostHandler(postID, postUpdate);
  response.status(res.status).json(res.message);
};

// DELETE POST
const deletePost = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const postID = request.params.postid;
  const userID = request.params.userid;
  const photoPublicID = request.params.publicid;
  const res: any = await deletePostHandler(postID, userID, photoPublicID);
  response.status(res.status).json(res.message);
};

// LIKE / DISLIKE POST
const likePost = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const postID = request.params.id;
  const userID = request.body.userID;
  const res: any = await likePostHandler(postID, userID);
  response.status(res.status).json(res.message);
};

// GET POST
const getPost = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const postID = request.params.id;
  const res: any = await getPostHandler(postID);
  // console.log(res);
  response.status(res.status).json(res.message);
};

// GET ALL TIMELINE POSTS
const getPosts = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const userID = request.params.id;
  const res: any = await getPostsHandler(userID);
  response.status(res.status).json(res.message);
};

// GET ALL USER TIMELINE POSTS
const getUserPosts = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const id = request.params.id;
  const res: any = await getUserPostsHandler(id);
  response.status(res.status).json(res.message);
};

// GET ALL POSTS
const getAllPosts = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const res: any = await getAllPostsHandler();
  response.status(res.status).json(res.message);
};

export { PostController };
