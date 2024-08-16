/**
 * This is an utility functions that helps handle async operation
 */

import { IResponseConfig, RelayResponse } from "./responses";

export const TryCatch = async <T>(
  callback: () => Promise<IResponseConfig<T>>
) => {
  try {
    return await callback();
  } catch (error) {
    return RelayResponse<T>({
      status: error.status ?? 400,
      error: {
        name: error.name,
        message: error.message,
      },
    });
  }
};
