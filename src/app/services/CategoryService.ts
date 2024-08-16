/**
 * This module is responsible for implementing the business logic
 * I ensure that the methods in this class has no idea about the request
 * It's main concern is to handle the business logic.
 * This architecture allows for clean server architecture and
 * code sharing between different services without
 * having to worry about the request object and many other goodies.
 * This module is responsible for all of CATEGORY related logics
 */

import HTTP_STATUS_CODES from "@src/constants/HTTPStatusCodes";
import { RelayResponse } from "@src/lib/helpers/responses";
import { TryCatch } from "@src/lib/helpers/try-catch";
import { CategoryModel } from "../models/CategoryModel";
import { AppError } from "@src/lib/helpers/errors";
import {
  ICreateCategory,
  IUpdateCategory,
} from "@src/types/category.interface";
import mongoose from "mongoose";

export class CategoryService {
  public static CreateCategory = async (categoryData: ICreateCategory) =>
    await TryCatch(async () => {
      const newCategory = await new CategoryModel(categoryData).save();

      if (!newCategory) {
        throw new AppError(
          "Sorry, there was a problem creating category",
          HTTP_STATUS_CODES.BAD_REQUEST
        );
      }

      return RelayResponse({
        status: HTTP_STATUS_CODES.OK,
        message: "Category Created Successfully!",
        data: newCategory,
      });
    });

  public static UpdateCategory = async (
    categoryId: string,
    updatedCategoryData: IUpdateCategory
  ) =>
    await TryCatch(async () => {
      const updatedCategory = await CategoryModel.findByIdAndUpdate(
        categoryId,
        updatedCategoryData
      );

      if (!updatedCategory) {
        throw new AppError(
          "Sorry there was a problem updating Category",
          HTTP_STATUS_CODES.BAD_REQUEST
        );
      }

      return RelayResponse({
        status: HTTP_STATUS_CODES.OK,
        message: "Category Updated Successfully",
        data: { ...updatedCategory.toJSON(), ...updatedCategoryData },
      });
    });

  public static GetAllCategories = async () =>
    await TryCatch(async () => {
      const categories = await CategoryModel.find();

      return RelayResponse({
        status: HTTP_STATUS_CODES.OK,
        message: "All Categories retrieved successfully",
        data: categories,
      });
    });

  public static GetSingleCategory = async (categoryId: string) =>
    await TryCatch(async () => {
      const category = await CategoryModel.aggregate([
        {
          $match: {
            _id: new mongoose.Types.ObjectId(categoryId),
          },
        },
        {
          /**
           * I use the piece of code here to lookup the DB
           * and fetch all sub_categories of the requested category
           */
          $lookup: {
            from: "sub-categories",
            localField: "_id",
            foreignField: "parentCategoryId",
            as: "subCategories",
          },
        },
      ]);

      if (!category.length) {
        throw new AppError(
          "Sorry the category you requested does not exist in DB",
          HTTP_STATUS_CODES.NOT_FOUND
        );
      }

      return RelayResponse({
        status: HTTP_STATUS_CODES.OK,
        message: "Category retrieved successfully",
        data: category[0],
      });
    });
}
