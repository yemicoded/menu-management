/**
 * The SUB_CATEGORY router and all of it's necessary request verbs(HTTP methods)
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
import SubCategoryValidation from "@src/validations/SubCategoryValidation";
import { SubCategoryController } from "../controllers/SubCategoryController";

const SubCategoryRouter = Router();

SubCategoryRouter.post(
  API_ROUTES.SUB_CATEGORIES.CREATE,
  ValidateRequest(SubCategoryValidation.CreateSubCategory),
  SubCategoryController.CreateSubCategory
);

SubCategoryRouter.put(
  API_ROUTES.SUB_CATEGORIES.UPDATE,
  ValidateRequest(SubCategoryValidation.UpdateSubCategory),
  SubCategoryController.UpdateSubCategory
);

SubCategoryRouter.get(
  API_ROUTES.SUB_CATEGORIES.GET_ALL,
  SubCategoryController.GetAllSubCategories
);

SubCategoryRouter.get(
  API_ROUTES.SUB_CATEGORIES.GET_SINGLE,
  SubCategoryController.GetSingleSubCategory
);

export default SubCategoryRouter;
