import config from "config";
import jwt from "jsonwebtoken";
import { NextFunction } from "express";
import { Response } from "express";
import { Request } from "express";

const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers["authorization"];

  if (!authHeader) {
    return res.sendStatus(401);
  }
  //@ts-ignore
  const token = authHeader.split(" ")[1];
  jwt.verify(token, `${process.env.JWT_SECRET}`, (err: any, decoded: any) => {
    if (err) {
      return res.sendStatus(403);
    }
    //@ts-ignore
    req.user = decoded;
    next();
  });
};

export default authenticateToken;
