import { ObjectId, Types } from "mongoose";



export type TcustomerReview = {
    rating: number; review: string; reviewer: ObjectId

}

export type TCuisineSpecialties = {
    value: string
}
export type TAvailableMealOptions = {
    value: string
}
export type TAvailablity = {
    value: string
}
export interface IMealProvider {
    mealProvider: Types.ObjectId,
    cuisineSpecialties: TCuisineSpecialties[];
    availableMealOptions: TAvailableMealOptions[];
    availability: TAvailablity[];
    pricing: { min: string; max: string };
    experience: string;

    customerReviews: TcustomerReview[];
}
