import { ObjectId, Types } from "mongoose";



export type TcustomerReview = {
    rating: number; review: string; reviewer: ObjectId

}

export type TCuisineSpecialties = {
    value: string
}


export interface IMealProvider {
    title: string;
    mealProvider: Types.ObjectId,
    cuisineSpecialties: TCuisineSpecialties[];
    availableMealOptions: string[];
    availability: string[];
    pricing: { min: string; max: string };
    experience: string;

    customerReviews: TcustomerReview[];
}
