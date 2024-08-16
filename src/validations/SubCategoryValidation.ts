/**
 * The SUB_CATEGORY request body validation is handled here
 */

import { TTaxType } from "@src/types/category.interface";
import { IRequestValidator } from "@src/types/request-validator.interface";
import { ICreateSubCategory } from "@src/types/sub-category.interface";
import * as Yup from "yup";

class SubCategoryValidation {
  public static CreateSubCategory = Yup.object().shape<
    Record<keyof IRequestValidator, Yup.AnySchema>
  >({
    body: Yup.object()
      .shape<Record<keyof ICreateSubCategory, Yup.AnySchema>>({
        name: Yup.string().required("Category name is required"),
        description: Yup.string().required("Category description is required"),
        image: Yup.string().required("Category image url is required"),
        parentCategoryId: Yup.string().required(
          "Parent category ID is required"
        ),
        tax: Yup.number().optional(),
        taxApplicability: Yup.boolean().optional(),
        taxType: Yup.string<TTaxType>().oneOf(["type1", "type2"]).optional(),
      })
      .required("Request body is required"),
    params: Yup.object().optional(),
    query: Yup.object().optional(),
    headers: Yup.object().optional(),
  });

  public static UpdateSubCategory = this.CreateSubCategory;
}

export default SubCategoryValidation;
