/**
 * This module handles the request and response between the client and server
 * and return the appropriate response
 * It serves as bridge between the client request, 
 * server services and the response.
 * Thus the name controller.
 * This controller handles request and responses related to ITEM
 */

import { IRequest, IResponse } from "@src/types/express.interface";
import { ICreateItem, IUpdateItem } from "@src/types/item.interface";
import { ItemService } from "../services/ItemService";

export class ItemController {
  public static CreateItem = async (
    req: IRequest<ICreateItem>,
    res: IResponse
  ) => {
    const itemData = req.body;
    const response = await ItemService.CreateItem(itemData);
    res.status(response.status).json(response);
  };

  public static UpdateItem = async (
    req: IRequest<IUpdateItem>,
    res: IResponse
  ) => {
    const updatedItemData = req.body;
    const { id } = req.params;
    const response = await ItemService.UpdateItem(id, updatedItemData);
    res.status(response.status).json(response);
  };

  public static GetAllItems = async (
    req: IRequest<unknown>,
    res: IResponse
  ) => {
    const query = req.query as unknown as {
      search: string;
    };
    const response = await ItemService.GetAllItems(query);
    res.status(response.status).json(response);
  };

  public static GetSingleItem = async (
    req: IRequest<unknown>,
    res: IResponse
  ) => {
    const { id } = req.params;
    const response = await ItemService.GetSingleItem(id);
    res.status(response.status).json(response);
  };

  public static GetItemsByCategory = async (
    req: IRequest<unknown>,
    res: IResponse
  ) => {
    const { categoryId } = req.params;
    const response = await ItemService.GetItemsByCategory(categoryId);
    res.status(response.status).json(response);
  };

  public static GetItemsBySubCategory = async (
    req: IRequest<unknown>,
    res: IResponse
  ) => {
    const { subCategoryId } = req.params;
    const response = await ItemService.GetItemsBySubCategory(subCategoryId);
    res.status(response.status).json(response);
  };

  public static GetItemsByCategoryAndSubCategory = async (
    req: IRequest<unknown>,
    res: IResponse
  ) => {
    const { categoryId, subCategoryId } = req.params;
    const response = await ItemService.GetItemsByCategoryAndSubCategory(
      categoryId,
      subCategoryId
    );
    res.status(response.status).json(response);
  };
}
