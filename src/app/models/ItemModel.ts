/**
 * This module is solely meant for modeling my mongodb schema
 * The ITEM model is build here
 */

import { ICreateItem } from "@src/types/item.interface";
import mongoose from "mongoose";

const schema = new mongoose.Schema<ICreateItem>({
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
  baseAmount: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number,
    required: true,
  },
  totalAmount: {
    type: Number,
    required: true,
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Category",
  },
  subCategoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Sub-Category",
    default: null,
  },
});

export const ItemModel = mongoose.model("Item", schema);
