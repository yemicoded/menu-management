import mongoose from "mongoose";
import { ICreateCategory } from "./category.interface";

export type TTaxType = "type1" | "type2";

export interface ICreateSubCategory
  extends Omit<ICreateCategory, "hasSubCategories"> {
  parentCategoryId: mongoose.Types.ObjectId;
}

export interface IGetSubCategory extends ICreateSubCategory {
  _id: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

export interface IUpdateSubCategory extends ICreateSubCategory {}
