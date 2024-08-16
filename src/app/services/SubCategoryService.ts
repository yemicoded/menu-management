/**
 * This module is responsible for implementing the business logic
 * I ensure that the methods in this class has no idea about the request
 * It's main concern is to handle the business logic.
 * This architecture allows for clean server architecture and
 * code sharing between different services without
 * having to worry about the request object and many other goodies.
 * This module is responsible for all of SUB_CATEGORY related logics
 */

import HTTP_STATUS_CODES from "@src/constants/HTTPStatusCodes";
import { RelayResponse } from "@src/lib/helpers/responses";
import { TryCatch } from "@src/lib/helpers/try-catch";
import { CategoryModel } from "../models/CategoryModel";
import { AppError } from "@src/lib/helpers/errors";
import { SubCategoryModel } from "../models/SubCategoryModel";
import {
  ICreateSubCategory,
  IUpdateSubCategory,
} from "@src/types/sub-category.interface";

export class SubCategoryService {
  public static CreateSubCategory = async (
    subCategoryData: ICreateSubCategory
  ) =>
    await TryCatch(async () => {
      const { parentCategoryId, ...rest } = subCategoryData;
      const parentCategory = await CategoryModel.findById(parentCategoryId);

      if (!parentCategory) {
        throw new AppError(
          "Sorry the parent Category you specified does not exist",
          HTTP_STATUS_CODES.NOT_FOUND
        );
      }

      if (!parentCategory.hasSubCategories) {
        throw new AppError(
          "Sorry the Parent Category you specified is not allowed to have sub categories. Kindly proceed to update",
          HTTP_STATUS_CODES.NOT_ACCEPTABLE
        );
      }

      const newSubCategory = await new SubCategoryModel({
        ...rest,
        taxApplicability:
          rest.taxApplicability ?? parentCategory.taxApplicability,
        tax: rest.tax ?? parentCategory.tax,
        taxType: rest.taxType ?? parentCategory.taxType,
        parentCategoryId,
      }).save();

      if (!newSubCategory) {
        throw new AppError(
          "Sorry, there was a problem creating sub-category",
          HTTP_STATUS_CODES.BAD_REQUEST
        );
      }

      return RelayResponse({
        status: HTTP_STATUS_CODES.OK,
        message: "Sub-Category Created Successfully!",
        data: newSubCategory,
      });
    });

  public static UpdateSubCategory = async (
    subCategoryId: string,
    updatedSubCategoryData: IUpdateSubCategory
  ) =>
    await TryCatch(async () => {
      const updatedSubCategory = await SubCategoryModel.findByIdAndUpdate(
        subCategoryId,
        updatedSubCategoryData
      );

      if (!updatedSubCategory) {
        throw new AppError(
          "Sorry there was a problem updating Sub-Category",
          HTTP_STATUS_CODES.BAD_REQUEST
        );
      }

      return RelayResponse({
        status: HTTP_STATUS_CODES.OK,
        message: "Sub-Category Updated Successfully",
        data: { ...updatedSubCategory.toJSON(), ...updatedSubCategoryData },
      });
    });

  public static GetAllSubCategories = async () =>
    await TryCatch(async () => {
      const subCategories = await SubCategoryModel.aggregate([
        {
          $match: {
            parentCategoryId: {
              $ne: null,
            },
          },
        },
      ]);

      return RelayResponse({
        status: HTTP_STATUS_CODES.OK,
        message: "All Sub-Categories retrieved successfully",
        data: subCategories,
      });
    });

  public static GetSingleSubCategory = async (subCategoryId: string) =>
    await TryCatch(async () => {
      const subCategory = await SubCategoryModel.findById(subCategoryId);

      if (!subCategory) {
        throw new AppError(
          "sorry the sub-category you requested does not exist in DB",
          HTTP_STATUS_CODES.NOT_FOUND
        );
      }

      return RelayResponse({
        status: HTTP_STATUS_CODES.OK,
        message: "Sub-Category retrieved successfully",
        data: subCategory,
      });
    });
}
