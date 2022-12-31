import { Request, Response, Router, NextFunction } from "express";

import { UserController } from "./controllers/user.controller";

const v1Routes = () => {
  console.log("~ V1 routes started.");
  const router = Router();

  router.use(
    "/ping",
    (
      request: Request,
      response: Response,
      next: NextFunction,
      pickFields: any = null
    ) => {
      console.log("Pong");
      response.send("Pong");
    }
  );

  router.use("/users", UserController());

  console.log("|_V1 routes finished ✔");
  return router;
};

export default v1Routes;
