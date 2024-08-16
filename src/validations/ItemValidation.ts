/**
 * The ITEM request body validation is handled here
 */

import { ICreateItem } from "@src/types/item.interface";
import { IRequestValidator } from "@src/types/request-validator.interface";
import * as Yup from "yup";

class ItemValidation {
  public static CreateItem = Yup.object().shape<
    Record<keyof IRequestValidator, Yup.AnySchema>
  >({
    body: Yup.object()
      .shape<Record<keyof ICreateItem, Yup.AnySchema>>({
        name: Yup.string().required("Category name is required"),
        description: Yup.string().required("Category description is required"),
        image: Yup.string().required("Category image url is required"),
        tax: Yup.number().required("Tax ID is required"),
        taxApplicability: Yup.boolean().required(
          "Tax applicability status is required"
        ),
        baseAmount: Yup.number().required("Base Amount is required"),
        discount: Yup.number().required("Discount is required"),
        totalAmount: Yup.number().required("Total amount required"),
        categoryId: Yup.string().required("Category ID is required"),
        subCategoryId: Yup.string().optional(),
      })
      .required("Request body is required"),
    params: Yup.object().optional(),
    query: Yup.object().optional(),
    headers: Yup.object().optional(),
  });

  public static UpdateItem = this.CreateItem;
}

export default ItemValidation;
