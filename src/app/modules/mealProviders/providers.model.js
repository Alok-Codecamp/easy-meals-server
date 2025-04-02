"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// Define Meal Schema
const MealSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    calories: { type: Number, required: true },
    isVegetarian: { type: Boolean, required: true },
});
// Define Customer Review Schema
const CustomerReviewSchema = new mongoose_1.Schema({
    rating: { type: Number, required: true, min: 0, max: 5 },
    review: { type: String, required: true },
    reviewer: {
        type: mongoose_1.Schema.ObjectId,
        ref: 'User',
        required: true
    },
});
// Define Meal Provider Schema
const MealProviderSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    cuisineSpecialties: { type: [String], required: true },
    availableMeals: { type: [MealSchema], required: true },
    pricing: {
        min: { type: Number, required: true },
        max: { type: Number, required: true },
    },
    experience: { type: Number, required: true },
    customerReviews: { type: [CustomerReviewSchema], required: true },
}, { timestamps: true });
// Create Mongoose Model
const MealProvider = (0, mongoose_1.model)("MealProvider", MealProviderSchema);
exports.default = MealProvider;
