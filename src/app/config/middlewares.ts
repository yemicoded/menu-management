import { ENV_VARS, NODE_ENVS } from "@src/app/config/environment";
import cookieParser from "cookie-parser";
import express, { Express } from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";

const middlewares = (app: Express) => {
  // Basic middleware
  app.use(
    cors({
      /**
       * I have restricted the app to only be callable on port 3000 from the browser
       * any request outside the specified port will throw a cors error.
       * the url can be updated to the frontend url when necessary
       */
      origin: "http://localhost:3000",
    })
  );
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser(ENV_VARS.COOKIE_PROPS.Secret));

  // Show routes called in console during development
  if (ENV_VARS.NODE_ENV === NODE_ENVS.DEV.valueOf()) {
    app.use(morgan("dev"));
  }

  // Security
  if (ENV_VARS.NODE_ENV === NODE_ENVS.PROD.valueOf()) {
    app.use(helmet());
  }
};

export default middlewares;
