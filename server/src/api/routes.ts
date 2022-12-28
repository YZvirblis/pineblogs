import { Request, Response, Router } from "express";
import v1Routes from "./v1/v1.routes";

const initializeApiRoutes = () => {
  const router = Router();

  console.log(`Initializing routes...`);
  router.use("/v1/", v1Routes());

  console.log(`Routes initialized successfully`);
  return router;
};
export default initializeApiRoutes;
