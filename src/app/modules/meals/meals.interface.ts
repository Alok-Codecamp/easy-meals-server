import { Types } from "mongoose";

export interface IMeals {
    mealProvider: Types.ObjectId;
    mealTitle: string;
    description: string;
    price: string;
    image: string;
    isAvailable: boolean;
}