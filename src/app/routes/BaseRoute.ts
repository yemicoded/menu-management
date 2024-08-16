/**
 * This is where all of my routers are registered
 * It is a middleware that handles the app routing
 * every router has to be registered in here for visibility
 */
import { API_ROUTES } from "@src/constants/ApiRoutes";
import { Router } from "express";
import CategoryRouter from "./CategoryRouter";
import SubCategoryRouter from "./SubCategoryRouter";
import ItemRouter from "./ItemRouter";

const BaseRouter = Router();

// Category Router
BaseRouter.use(API_ROUTES.CATEGORIES.BASE, CategoryRouter);

// Sub-Category Router
BaseRouter.use(API_ROUTES.SUB_CATEGORIES.BASE, SubCategoryRouter);

// Item Router
BaseRouter.use(API_ROUTES.ITEMS.BASE, ItemRouter);

export default BaseRouter;
