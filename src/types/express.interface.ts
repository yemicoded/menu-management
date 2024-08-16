import * as e from "express";

export interface IAuthUser {
  _id: string;
  exp: number;
  iat: number;
}

export interface IRequest<T> extends e.Request {
  body: T;
  user: IAuthUser;
}

export interface IResponse extends e.Response {}
