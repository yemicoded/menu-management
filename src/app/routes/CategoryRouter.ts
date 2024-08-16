/**
 * The CATEGORY router and all of it's necessary request verbs(HTTP methods)
 * are defined in here.
 * The ValidateRequest in the POST and PUT methods is a middleware
 * responsible for validating the request body on the server in
 * order to ensure data accuracy.
 * Other middlewares can be passed to the necessary route(s) in their 
 * hierarchical order of execution
 */

import { API_ROUTES } from "@src/constants/ApiRoutes";
import ValidateRequest from "@src/middlewares/validate-request";
import { Router } from "express";
import CategoryValidation from "@src/validations/CategoryValidation";
import { CategoryController } from "../controllers/CategoryController";

const CategoryRouter = Router();

CategoryRouter.post(
  API_ROUTES.CATEGORIES.CREATE,
  ValidateRequest(CategoryValidation.CreateCategory),
  CategoryController.CreateCategory
);

CategoryRouter.put(
  API_ROUTES.CATEGORIES.UPDATE,
  ValidateRequest(CategoryValidation.UpdateCategory),
  CategoryController.UpdateCategory
);

CategoryRouter.get(
  API_ROUTES.CATEGORIES.GET_ALL,
  CategoryController.GetAllCategories
);

CategoryRouter.get(
  API_ROUTES.CATEGORIES.GET_SINGLE,
  CategoryController.GetSingleCategory
);

export default CategoryRouter;
