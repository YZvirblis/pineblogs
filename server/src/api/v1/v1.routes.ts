import { Request, Response, Router, NextFunction } from "express";
import { PostController } from "./controllers/post.controller";

import { UserController } from "./controllers/user.controller";

const v1Routes = () => {
  console.log("~ V1 routes started.");
  const router = Router();

  router.use('/ping/', (req,res) => {res.send("Pong")})

  router.use("/users/", UserController());
  router.use("/posts/", PostController());

  console.log("|_V1 routes finished ✔");
  return router;
};

export default v1Routes;
