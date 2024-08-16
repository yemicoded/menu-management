/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Express, NextFunction, Request, Response } from "express";
import { Error } from "mongoose";
import logger from "jet-logger";
import { RouteError } from "@src/other/classes";
import "express-async-errors";
import { ENV_VARS, NODE_ENVS } from "@src/app/config/environment";
import { HTTP_STATUS_CODES } from "@src/constants/HTTPStatusCodes";

const errorsHandler = (app: Express) => {
  app.use(
    (
      err: Error,
      _: Request,
      res: Response,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      next: NextFunction
    ) => {
      if (ENV_VARS.NODE_ENV !== NODE_ENVS.TEST.valueOf()) {
        logger.err(err, true);
      }
      let status = HTTP_STATUS_CODES.BAD_REQUEST;
      if (err instanceof RouteError) {
        status = err.status;
      }
      return res
        .status(status ?? HTTP_STATUS_CODES.BAD_REQUEST)
        .json({ error: { message: err.message } });
    }
  );
};

export default errorsHandler;
