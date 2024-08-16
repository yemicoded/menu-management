/**
 * The ITEM router and all of it's necessary request verbs(HTTP methods)
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
import { ItemController } from "../controllers/ItemController";
import ItemValidation from "@src/validations/ItemValidation";

const ItemRouter = Router();

ItemRouter.post(
  API_ROUTES.ITEMS.CREATE,
  ValidateRequest(ItemValidation.CreateItem),
  ItemController.CreateItem
);

ItemRouter.put(
  API_ROUTES.ITEMS.UPDATE,
  ValidateRequest(ItemValidation.UpdateItem),
  ItemController.UpdateItem
);

ItemRouter.get(API_ROUTES.ITEMS.GET_ALL, ItemController.GetAllItems);

ItemRouter.get(API_ROUTES.ITEMS.GET_SINGLE, ItemController.GetSingleItem);

ItemRouter.get(
  API_ROUTES.ITEMS.GET_BY_CATEGORY,
  ItemController.GetItemsByCategory
);

ItemRouter.get(
  API_ROUTES.ITEMS.GET_BY_SUB_CATEGORY,
  ItemController.GetItemsBySubCategory
);

ItemRouter.get(
  API_ROUTES.ITEMS.GET_BY_CATEGORY_AND_SUB_CATEGORY,
  ItemController.GetItemsByCategoryAndSubCategory
);

export default ItemRouter;
