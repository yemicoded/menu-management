/**
 * Environments variables declared here.
 */

/* eslint-disable node/no-process-env */

export enum NODE_ENVS {
  DEV = "development",
  TEST = "test",
  PROD = "production",
}

export const ENV_VARS = {
  NODE_ENV: process.env.NODE_ENV ?? "",
  PORT: process.env.NODE_ENV === "production" ? process.env.PORT : 4002,
  COOKIE_PROPS: {
    Key: "ExpressGeneratorTs",
    Secret: process.env.COOKIE_SECRET ?? "",
    // Casing to match express cookie options
    Options: {
      httpOnly: true,
      signed: true,
      path: process.env.COOKIE_PATH ?? "",
      maxAge: Number(process.env.COOKIE_EXP ?? 0),
      domain: process.env.COOKIE_DOMAIN ?? "",
      secure: process.env.SECURE_COOKIE === "true",
    },
  },
  JWT: {
    Secret: process.env.JWT_SECRET ?? "",
    Expires: process.env.COOKIE_EXP ?? "", // exp at the same time as the cookie
  },
  MONGO_DB_URL: process.env.MONGO_DB_URL ?? "",
  PAGE_SIZE: 20,
};
