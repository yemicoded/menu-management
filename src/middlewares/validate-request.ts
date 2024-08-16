/**
 * ValidateRequest is a middleware that helps intercept the request
 * and checks the request body validity and data accuracy.
 */

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import HTTP_STATUS_CODES from "@src/constants/HTTPStatusCodes";
import {
  IRequestValidator,
  IValidationError,
} from "@src/types/request-validator.interface";
import { NextFunction, Request, Response } from "express";
import * as Yup from "yup";

const ValidateRequest =
  (schema: Yup.Schema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validate({
        body: req.body,
        params: req.params,
        query: req.query,
        headers: req.headers,
      } as IRequestValidator);
      next();
    } catch (err: unknown) {
      const error = err as IValidationError;
      res.status(HTTP_STATUS_CODES.BAD_REQUEST).json({
        status: HTTP_STATUS_CODES.BAD_REQUEST,
        error: { name: error.name, message: error.message },
      });
    }
  };

export default ValidateRequest;
