import config from "config";
import jwt from "jsonwebtoken";
import { NextFunction } from "express";
import { Response } from "express";
import { Request } from "express";

const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers["Authorization"];
  // @ts-ignore
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) res.sendStatus(401);

  jwt.verify(token, config.get("JWT.secret"), (err: any, user: any) => {
    if (err) return res.sendStatus(403);

    //@ts-ignore
    req.user = user;
    next();
  });
};

export default authenticateToken;
