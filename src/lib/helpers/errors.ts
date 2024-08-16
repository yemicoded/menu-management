/**
 * This a custom error class that I built for the app.
 * The sole purpose of this error class is to have a well defined response 
 * and to maintain my response object i.e
 * {status, message}
 */
import HTTP_STATUS_CODES from "@src/constants/HTTPStatusCodes";

export class AppError extends Error {
  public status: HTTP_STATUS_CODES;
  public message: string;
  public constructor(message: string, errorCode?: HTTP_STATUS_CODES) {
    super(message);
    this.message = message;
    this.status = errorCode || 404;
    this.name = this.constructor.name;
  }
}
