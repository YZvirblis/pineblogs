import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import initializeApiRoutes from "./api/routes";
import config from "config";
// import { v2 as cloudinary } from "cloudinary";

const app = express();
const PORT = process.env.PORT || 8800;
// const cloudinaryConfig = config.get("CLOUDINARY");

// cloudinary.config(cloudinaryConfig);
dotenv.config();
mongoose.set("strictQuery", true);

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use(cors());

mongoose.connect(config.get("MONGO.url"), (error) => {
  if (error) {
    console.log("Database error: ", error);
  } else {
    console.log("Database connected.");
    app.use("/api/", initializeApiRoutes());
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  }
});
