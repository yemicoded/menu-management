/**
 * The CATEGORY request body validation is handled here
 */

import { ICreateCategory, TTaxType } from "@src/types/category.interface";
import { IRequestValidator } from "@src/types/request-validator.interface";
import * as Yup from "yup";

class CategoryValidation {
  public static CreateCategory = Yup.object().shape<
    Record<keyof IRequestValidator, Yup.AnySchema>
  >({
    body: Yup.object()
      .shape<Record<keyof ICreateCategory, Yup.AnySchema>>({
        name: Yup.string().required("Category name is required"),
        description: Yup.string().required("Category description is required"),
        image: Yup.string().required("Category image url is required"),
        hasSubCategories: Yup.string().optional(),
        tax: Yup.number().required("Tax ID is required"),
        taxApplicability: Yup.boolean().required(
          "Tax applicability status is required"
        ),
        taxType: Yup.string<TTaxType>()
          .oneOf(["type1", "type2"])
          .required("Tax Type is required"),
      })
      .required("Request body is required"),
    params: Yup.object().optional(),
    query: Yup.object().optional(),
    headers: Yup.object().optional(),
  });

  public static UpdateCategory = this.CreateCategory;
}

export default CategoryValidation;
