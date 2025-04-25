"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// Define Meal Schema
// Define Customer Review Schema
const CustomerReviewSchema = new mongoose_1.Schema({
    rating: { type: Number, required: true, min: 1, max: 5, default: 1 },
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
    title: { type: String },
    mealProvider: {
        type: mongoose_1.Schema.ObjectId,
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
const MealProvider = (0, mongoose_1.model)("MealProvider", MealProviderSchema);
exports.default = MealProvider;
