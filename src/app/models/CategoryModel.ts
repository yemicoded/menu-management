/**
 * This module is solely meant for modeling my mongodb schema
 * The CATEGORY model is build here
 */

import { ICreateCategory } from "@src/types/category.interface";
import mongoose from "mongoose";

const schema = new mongoose.Schema<ICreateCategory>({
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
  hasSubCategories: {
    type: Boolean,
    required: true,
    default: false,
  },
});

export const CategoryModel = mongoose.model("Category", schema);
