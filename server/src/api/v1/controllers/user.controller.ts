import { Request, Response, Router, NextFunction } from "express";
import {
  getUserHandler,
  registerUserHandler,
  loginUserHandler,
  updateUserHandler,
  deleteUserHandler,
  followUserHandler,
  unfollowUserHandler,
  refreshUserHandler,
  logoutUserHandler,
  getAllUsersHandler
} from "../handlers/user.handler";
import authenticateToken from "../middlewares/middleware.auth";

const UserController = () => {
  const router = Router();
  router.post("/register", registerUser);
  router.post("/login", loginUser);
  router.get("/logout", logoutUser)
  router.get("/refresh", refreshUser);
  router.get("/allusers", authenticateToken,getAllUsers);
  router.get("/:id", authenticateToken, getUser);
  router.put("/update/:id", authenticateToken, updateUser);
  router.delete("/delete/:id", authenticateToken, deleteUser);
  router.put("/follow/:id", authenticateToken, followUser);
  router.put("/unfollow/:id", authenticateToken, unfollowUser);

  return router;
};

// GET USER BY ID
const getUser = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const userID = request.params.id;
  const username = request.query.username;
  const res: any = await getUserHandler(userID, username);
  response.status(res.status).json(res.message);
};

// GET ALL USERS
const getAllUsers = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const res: any = await getAllUsersHandler();
  response.status(res.status).json(res.message);
};

// REGISTRATION CONTROLLER
const registerUser = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { username, email, password } = request.body;
  const res: any = await registerUserHandler(username, email, password);
  console.log(res.message);
  response.status(res.status).send(res.message);
};

// LOGIN CONTROLLER
const loginUser = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { email, password } = request.body;
  const res: any = await loginUserHandler(email, password);
  response.cookie('jwt', res.message.refreshToken, {httpOnly:true, maxAge: 24 * 60 * 60 * 1000})
  response.status(res.status).json({token: res.message.accessToken, user: res.message.user});
};

// REFRESH CONTROLLER
const refreshUser = async (
  request: Request,
  response: Response,
  next: NextFunction
  ) => {
    const cookies = request.cookies
    const res: any = await refreshUserHandler(cookies);
    res.message.refreshToken && response.cookie('jwt', res.message.refreshToken, {httpOnly:true, maxAge: 24 * 60 * 60 * 1000})
    response.status(res.status).json({token: res.message.accessToken, user: res.message.user});
  };
  
  // LOGOUT CONTROLLER
  const logoutUser = async (
    request: Request,
    response: Response,
    next: NextFunction
  ) => {
    const cookies = request.cookies
    const res: any = await logoutUserHandler(cookies);
    console.log(res.message)
    response.clearCookie('jwt', {httpOnly:true})
    response.status(res.status).json({token: res.message.accessToken, user: res.message.user});
  };

  // UPDATE CONTROLLER
const updateUser = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const paramID = request.params.id;
  const user = request.body;
  const res: any = await updateUserHandler(paramID, user);
  response.status(res.status).json(res.message);
};

// DELETE CONTROLLER
const deleteUser = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const res: any = await deleteUserHandler(request.params.id, request.body);
  response.status(res.status).json(res.message);
};

// FOLLOW CONTROLLER
const followUser = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const paramID = request.params.id;
  const userID = request.body.id;
  const res: any = await followUserHandler(paramID, userID);
  response.status(res.status).json(res.message);
};

// UNFOLLOW CONTROLLER
const unfollowUser = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const paramID = request.params.id;
  const userID = request.body.id;
  const res: any = await unfollowUserHandler(paramID, userID);
  response.status(res.status).json(res.message);
};

export { UserController };
