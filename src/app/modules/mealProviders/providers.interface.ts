import { ObjectId, Types } from "mongoose";

export type TMeal = {
    title: string;
    description: string;
    price: string;
    isAvailable: boolean;
}

export type TcustomerReview = {
    rating: number; review: string; reviewer: ObjectId

}
export interface IMealProvider {
    mealProvider: Types.ObjectId,
    name: string;
    cuisineSpecialties: string[];
    availableMeals: TMeal[];
    pricing: { min: number; max: number };
    experience: number;
    customerReviews: TcustomerReview[];
}
