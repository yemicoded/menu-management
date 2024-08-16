/**
 * This module handles the request and response between the client and server
 * and return the appropriate response
 * It serves as bridge between the client request, 
 * server services and the response.
 * Thus the name controller.
 * This controller handles request and responses related to SUB_CATEGORY
 */

import { IRequest, IResponse } from "@src/types/express.interface";
import { SubCategoryService } from "../services/SubCategoryService";
import {
  ICreateSubCategory,
  IUpdateSubCategory,
} from "@src/types/sub-category.interface";

export class SubCategoryController {
  public static CreateSubCategory = async (
    req: IRequest<ICreateSubCategory>,
    res: IResponse
  ) => {
    const subCategoryData = req.body;
    const response = await SubCategoryService.CreateSubCategory(
      subCategoryData
    );
    res.status(response.status).json(response);
  };

  public static UpdateSubCategory = async (
    req: IRequest<IUpdateSubCategory>,
    res: IResponse
  ) => {
    const subCategoryData = req.body;
    const { id } = req.params;
    const response = await SubCategoryService.UpdateSubCategory(
      id,
      subCategoryData
    );
    res.status(response.status).json(response);
  };

  public static GetAllSubCategories = async (
    req: IRequest<unknown>,
    res: IResponse
  ) => {
    const response = await SubCategoryService.GetAllSubCategories();
    res.status(response.status).json(response);
  };

  public static GetSingleSubCategory = async (
    req: IRequest<unknown>,
    res: IResponse
  ) => {
    const { id } = req.params;
    const response = await SubCategoryService.GetSingleSubCategory(id);
    res.status(response.status).json(response);
  };
}
