/**
 * This module handles the request and response between the client and server
 * and return the appropriate response
 * It serves as bridge between the client request, 
 * server services and the response.
 * Thus the name controller.
 * This controller handles request and responses related to CATEGORY
 */

import {
  ICreateCategory,
  IUpdateCategory,
} from "@src/types/category.interface";
import { IRequest, IResponse } from "@src/types/express.interface";
import { CategoryService } from "../services/CategoryService";

export class CategoryController {
  public static CreateCategory = async (
    req: IRequest<ICreateCategory>,
    res: IResponse
  ) => {
    const categoryData = req.body;
    const response = await CategoryService.CreateCategory(categoryData);
    res.status(response.status).json(response);
  };

  public static UpdateCategory = async (
    req: IRequest<IUpdateCategory>,
    res: IResponse
  ) => {
    const categoryData = req.body;
    const { id } = req.params;
    const response = await CategoryService.UpdateCategory(id, categoryData);
    res.status(response.status).json(response);
  };

  public static GetAllCategories = async (
    req: IRequest<unknown>,
    res: IResponse
  ) => {
    const response = await CategoryService.GetAllCategories();
    res.status(response.status).json(response);
  };

  public static GetSingleCategory = async (
    req: IRequest<unknown>,
    res: IResponse
  ) => {
    const { id } = req.params;
    const response = await CategoryService.GetSingleCategory(id);
    res.status(response.status).json(response);
  };
}
