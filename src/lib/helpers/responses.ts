/* eslint-disable @typescript-eslint/no-redundant-type-constituents */
/* eslint-disable @typescript-eslint/no-explicit-any */
import HTTP_STATUS_CODES from "@src/constants/HTTPStatusCodes";
import { IPagination } from "@src/types/pagination.interface";
interface IToken {
  accessToken: string;
  refreshToken: string;
}

export interface IResponseConfig<T> {
  status: HTTP_STATUS_CODES;
  message?: string;
  data?: T;
  pagination?: IPagination;
  error?: {
    name: string;
    message: string;
  };
  token?: IToken;
}

export const RelayResponse = <T = unknown>(config: IResponseConfig<T>) => {
  return config;
};
