/**
 * This module is responsible for implementing the business logic
 * I ensure that the methods in this class has no idea about the request
 * It's main concern is to handle the business logic.
 * This architecture allows for clean server architecture and
 * code sharing between different services without
 * having to worry about the request object and many other goodies.
 * This module is responsible for all of ITEM related logics
 */

import HTTP_STATUS_CODES from "@src/constants/HTTPStatusCodes";
import { RelayResponse } from "@src/lib/helpers/responses";
import { TryCatch } from "@src/lib/helpers/try-catch";
import { ICreateItem, IUpdateItem } from "@src/types/item.interface";
import { ItemModel } from "../models/ItemModel";
import { AppError } from "@src/lib/helpers/errors";
import mongoose from "mongoose";

export class ItemService {
  public static CreateItem = async (itemData: ICreateItem) =>
    await TryCatch(async () => {
      const item = await new ItemModel(itemData).save();
      if (!item) {
        throw new AppError(
          "There was a problem creating item",
          HTTP_STATUS_CODES.BAD_REQUEST
        );
      }
      return RelayResponse({
        status: HTTP_STATUS_CODES.OK,
        message: "Item created successfully!",
        data: item,
      });
    });

  public static UpdateItem = async (
    itemId: string,
    updatedItemData: IUpdateItem
  ) =>
    await TryCatch(async () => {
      const updatedItem = await ItemModel.findByIdAndUpdate(
        itemId,
        updatedItemData
      );
      if (!updatedItem) {
        throw new AppError(
          "There was a problem updating item",
          HTTP_STATUS_CODES.BAD_GATEWAY
        );
      }
      return RelayResponse({
        status: HTTP_STATUS_CODES.OK,
        message: "Item updated successfully!",
        data: { ...updatedItem.toJSON(), ...updatedItemData },
      });
    });

  public static GetAllItems = async (queryParams: { search: string }) =>
    await TryCatch(async () => {
      const items = await ItemModel.aggregate([
        {
          $match: {
            $expr: {
              $cond: {
                if: queryParams.search,
                then: {
                  $regexMatch: {
                    input: "$name",
                    regex: queryParams.search,
                    options: "i",
                  },
                },
                else: true,
              },
            },
          },
        },
      ]);

      return RelayResponse({
        status: HTTP_STATUS_CODES.OK,
        message: "Items retrieved successfully!",
        data: items,
      });
    });

  public static GetSingleItem = async (itemId: string) =>
    await TryCatch(async () => {
      const item = await ItemModel.findById(itemId);
      if (!item) {
        throw new AppError(
          "Item with the specified ID does not exist in DB",
          HTTP_STATUS_CODES.NOT_FOUND
        );
      }
      return RelayResponse({
        status: HTTP_STATUS_CODES.OK,
        message: "Item retrieved successfully!",
        data: item,
      });
    });

  public static GetItemsByCategory = async (categoryId: string) =>
    await TryCatch(async () => {
      const items = await ItemModel.find({
        categoryId: new mongoose.Types.ObjectId(categoryId),
      });
      return RelayResponse({
        status: HTTP_STATUS_CODES.OK,
        message: "Items with the specified category retrieved successfully!",
        data: items,
      });
    });

  public static GetItemsBySubCategory = async (subCategoryId: string) =>
    await TryCatch(async () => {
      const items = await ItemModel.find({
        subCategoryId: new mongoose.Types.ObjectId(subCategoryId),
      });
      return RelayResponse({
        status: HTTP_STATUS_CODES.OK,
        message:
          "Items with the specified sub-category retrieved successfully!",
        data: items,
      });
    });

  public static GetItemsByCategoryAndSubCategory = async (
    categoryId: string,
    subCategoryId: string
  ) =>
    await TryCatch(async () => {
      const items = await ItemModel.find({
        categoryId: new mongoose.Types.ObjectId(categoryId),
        subCategoryId: new mongoose.Types.ObjectId(subCategoryId),
      });
      return RelayResponse({
        status: HTTP_STATUS_CODES.OK,
        message:
          "Items with the specified category and sub-category retrieved successfully!",
        data: items,
      });
    });
}
