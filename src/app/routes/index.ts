/**
 * This is the main file that exports the app router to the project root
 * I use this file convention(s) to maintain clean code and clean architecture
 */

import { API_ROUTES } from "@src/constants/ApiRoutes";
import { Express } from "express";
import BaseRouter from "./BaseRoute";

const routes = (app: Express) => {
  app.use(API_ROUTES.BASE, BaseRouter);
};

export default routes;
