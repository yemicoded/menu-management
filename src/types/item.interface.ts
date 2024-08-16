import mongoose from "mongoose";

export type TTaxType = "type1" | "type2";

export interface ICreateItem {
  name: string;
  image: string;
  description: string;
  taxApplicability: boolean;
  tax: number;
  baseAmount: number;
  discount: number;
  totalAmount: number;
  categoryId: mongoose.Types.ObjectId;
  subCategoryId: mongoose.Types.ObjectId;
}

export interface IGetItem extends ICreateItem {
  _id: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

export interface IUpdateItem extends ICreateItem {}
