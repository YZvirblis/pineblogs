import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import helmet from "helmet";
import cors from "cors";
import initializeApiRoutes from "./api/routes";
import cookieParser from "cookie-parser";
import credentials from "./api/v1/middlewares/middleware.credentials";
const corsOptions = require("./config/corsOptions");

const app = express();
const PORT = process.env.PORT || 8800;

dotenv.config();
mongoose.set("strictQuery", true);

app.use(express.urlencoded());
app.use(express.json());
app.use(cookieParser());
app.use(helmet());
// app.use(morgan("common"));
app.use(credentials);
app.use(cors(corsOptions));

console.log("Initiating");
mongoose.connect(`${process.env.MONGO_URL}`),
  (error: any) => {
    if (error) {
      console.log("Database error: ", error);
    } else {
      console.log("Database connected.");

      app.use("/api/", initializeApiRoutes());

      app.listen(PORT, () => {
        console.log(`Server is running on port: ${PORT}`);
      });
    }
  };
