import { Types } from "mongoose";

export interface IMeals {
    providerId: string;
    title: string;
    description: string;
    price: string;
    image: string;
    category: string[];
    tags: string[];
    ingredients: string[];
    preparationTime: string;
    portion: string[];
    isAvailable: boolean;
}