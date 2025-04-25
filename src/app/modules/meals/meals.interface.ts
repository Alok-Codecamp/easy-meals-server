import { Types } from "mongoose";

export interface IMeals {
    providerId: Types.ObjectId;
    title: string;
    description: string;
    price: string;
    image: string;
    category: string[];
    tags: string[];
    ingredients: string[];
    preparationTime: string;
    portion: string[];
    ratings: number;
    isAvailable: "Yes" | "No";
}