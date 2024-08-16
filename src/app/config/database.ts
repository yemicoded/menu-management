/**
 * My database connection happens here.
 * In this this project, I chose mongodb as my primary database.
 * should in case you need to connect other 
 * database(s). you can write the connection code here 
 * and export to the project root (index).
 */

import mongoose from "mongoose";
import { ENV_VARS } from "./environment";

const connectDB = () => {
  mongoose.connect(ENV_VARS.MONGO_DB_URL);
  mongoose.connection
    .on("error", () => {
      console.log("Unable to connect to mongoDB");
    })
    .once("connected", () => {
      console.log("Connected To MongoDB Successfully!");
    });
};

export default connectDB;
