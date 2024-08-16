import { IAuthUser } from "./express.interface";

declare global {
  namespace Express {
    export interface Request {
      user: IAuthUser;
    }
  }
}
