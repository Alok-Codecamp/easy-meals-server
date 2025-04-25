import mongoose, { Schema, Document, model } from "mongoose";
import { IMealProvider, TCuisineSpecialties, TcustomerReview } from "./providers.interface";


// Define Meal Schema


// Define Customer Review Schema
const CustomerReviewSchema = new Schema<TcustomerReview>({
    rating: { type: Number, required: true, min: 1, max: 5, default: 1 },
    review: { type: String, required: true },
    reviewer: {
        type: Schema.ObjectId,
        ref: 'User',
        required: true
    },
});

const cuisineSpecialtiesSchema = new Schema<TCuisineSpecialties>({
    value: {
        type: String,
        required: true,
    }
})

// Define Meal Provider Schema
const MealProviderSchema = new Schema<IMealProvider>({
    title: { type: String },
    mealProvider: {
        type: Schema.ObjectId,
        ref: 'User',
        required: true
    },

    cuisineSpecialties: [cuisineSpecialtiesSchema],
    availableMealOptions: [String],
    availability: [String],
    pricing: {
        min: { type: String, required: true },
        max: { type: String, required: true },
    },
    experience: { type: String, required: true },
    customerReviews: [CustomerReviewSchema]
}, { timestamps: true });

// Create Mongoose Model
const MealProvider = model<IMealProvider>("MealProvider", MealProviderSchema);

export default MealProvider;
