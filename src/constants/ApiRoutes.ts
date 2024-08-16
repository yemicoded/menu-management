/**
 * Express router paths go here.
 * All of my router urls are defined in here
 */

export const API_ROUTES = {
  BASE: "/api",
  AUTH: {
    BASE: "/auth",
    LOGIN: "/login",
    SIGNUP: "/signup",
    USER_INFO: "/user-info",
    VERIFY_EMAIL: "/verify-email",
    FORGOT_PASSWORD: "/forgot-password",
    RESET_PASSWORD: "/reset-password",
  },
  CATEGORIES: {
    BASE: "/categories",
    CREATE: "/create",
    UPDATE: "/:id",
    GET_ALL: "/",
    GET_SINGLE: "/:id",
  },
  SUB_CATEGORIES: {
    BASE: "/sub-categories",
    CREATE: "/create",
    UPDATE: "/:id",
    GET_ALL: "/",
    GET_SINGLE: "/:id",
  },
  ITEMS: {
    BASE: "/items",
    CREATE: "/create",
    UPDATE: "/:id",
    GET_ALL: "/",
    GET_SINGLE: "/:id",
    GET_BY_CATEGORY: "/categories/:categoryId",
    GET_BY_SUB_CATEGORY: "/sub-categories/:subCategoryId",
    GET_BY_CATEGORY_AND_SUB_CATEGORY: "/categories/:categoryId/:subCategoryId",
  },
};
