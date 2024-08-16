import mongoose from "mongoose";

export type TTaxType = "type1" | "type2";

export interface ICreateCategory {
  name: string;
  image: string;
  description: string;
  taxApplicability: boolean;
  tax: number;
  taxType: TTaxType;
  hasSubCategories: boolean;
}

export interface IGetCategory extends ICreateCategory {
  _id: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

export interface IUpdateCategory extends ICreateCategory {}
