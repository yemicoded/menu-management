/**
 * This module is solely meant for modeling my mongodb schema
 * The SUB_CATEGORY model is build here
 */

import { ICreateSubCategory } from "@src/types/sub-category.interface";
import mongoose from "mongoose";

const schema = new mongoose.Schema<ICreateSubCategory>({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  tax: {
    type: Number,
    required: true,
  },
  taxApplicability: {
    type: Boolean,
    required: true,
  },
  taxType: {
    type: String,
    required: true,
  },
  parentCategoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
});

export const SubCategoryModel = mongoose.model("Sub-Category", schema);
