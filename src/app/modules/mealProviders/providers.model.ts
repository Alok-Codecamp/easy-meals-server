import mongoose, { Schema, Document, model } from "mongoose";
import { IMealProvider, TCuisineSpecialties, TcustomerReview, TMeal } from "./providers.interface";

// Define Meal Schema
const MealSchema = new Schema<TMeal>({
    mealTitle: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
    image: { type: String, required: true },
    isAvailable: { type: Boolean, required: true, default: true },

});

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
    mealProvider: {
        type: Schema.ObjectId,
        ref: 'User',
        required: true
    },
    title: { type: String, required: true },
    cuisineSpecialties: [cuisineSpecialtiesSchema],
    availableMeals: [MealSchema],
    pricing: {
        min: { type: String, required: true },
        max: { type: String, required: true },
    },
    experience: { type: String, required: true, default: "1" },
    customerReviews: [CustomerReviewSchema]
}, { timestamps: true });

// Create Mongoose Model
const MealProvider = model<IMealProvider>("MealProvider", MealProviderSchema);

export default MealProvider;
