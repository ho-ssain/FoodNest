import { Schema, model } from "mongoose";

export interface Food {
  name: string;
  price: number;
  tags: string[];
  fav: boolean;
  stars: number;
  origins: string[];
  cookTime: string;
  imageUrl: string;
}

export const FoodSchema = new Schema<Food>(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    tags: { type: [String] },
    fav: { type: Boolean, default: false },
    stars: { type: Number, required: true },
    origins: { type: [String], required: true },
    cookTime: { type: String, required: true },
    imageUrl: { type: String, required: true },
  },
  {
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
    timestamps: true,
  }
);

export const FoodModel = model<Food>("food", FoodSchema);
