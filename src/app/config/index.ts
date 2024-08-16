/**
 * I exported all of my config functions here
 * and from here to the project root (index)
 * I adopt this method to maintain clean code
 * and not bloat the root as this config functions can grow
 * exponentially in the future (as the project gets more complex)
 */

import express from "express";
import middlewares from "./middlewares";
import errorsHandler from "./errors-handler";
import connectDB from "@src/app/config/database";
import routes from "../routes";

const server = express();

middlewares(server);
connectDB();
routes(server);
errorsHandler(server);

export default server;
