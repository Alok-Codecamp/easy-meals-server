"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// Define Meal Schema
const MealSchema = new mongoose_1.Schema({
    mealTitle: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
    isAvailable: { type: Boolean, required: true, default: true },
});
// Define Customer Review Schema
const CustomerReviewSchema = new mongoose_1.Schema({
    rating: { type: Number, required: true, min: 1, max: 5 },
    review: { type: String, required: true },
    reviewer: {
        type: mongoose_1.Schema.ObjectId,
        ref: 'User',
        required: true
    },
});
const cuisineSpecialtiesSchema = new mongoose_1.Schema({
    value: {
        type: String,
        required: true,
    }
});
// Define Meal Provider Schema
const MealProviderSchema = new mongoose_1.Schema({
    mealProvider: {
        type: mongoose_1.Schema.ObjectId,
        ref: 'User',
        required: true
    },
    title: { type: String, required: true },
    cuisineSpecialties: [cuisineSpecialtiesSchema],
    availableMeals: [MealSchema],
    pricing: {
        min: { type: Number, required: true },
        max: { type: Number, required: true },
    },
    experience: { type: Number, required: true, default: 1 },
    customerReviews: [CustomerReviewSchema]
}, { timestamps: true });
// Create Mongoose Model
const MealProvider = (0, mongoose_1.model)("MealProvider", MealProviderSchema);
exports.default = MealProvider;
