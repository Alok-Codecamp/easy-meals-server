import mongoose, { Schema, Document, model } from "mongoose";
import { IMealProvider, TcustomerReview, TMeal } from "./providers.interface";

// Define Meal Schema
const MealSchema = new Schema<TMeal>({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
    isAvailable: { type: Boolean, required: true },

});

// Define Customer Review Schema
const CustomerReviewSchema = new Schema<TcustomerReview>({
    rating: { type: Number, required: true, min: 1, max: 5 },
    review: { type: String, required: true },
    reviewer: {
        type: Schema.ObjectId,
        ref: 'User',
        required: true
    },
});

// Define Meal Provider Schema
const MealProviderSchema = new Schema<IMealProvider>({
    mealProvider: {
        type: Schema.ObjectId,
        ref: 'User',
        required: true
    },
    name: { type: String, required: true },
    cuisineSpecialties: { type: [String], required: true },
    availableMeals: [MealSchema],
    pricing: {
        min: { type: Number, required: true },
        max: { type: Number, required: true },
    },
    experience: { type: Number, required: true },
    customerReviews: {
        type: [CustomerReviewSchema],
    },
}, { timestamps: true });

// Create Mongoose Model
const MealProvider = model<IMealProvider>("MealProvider", MealProviderSchema);

export default MealProvider;
