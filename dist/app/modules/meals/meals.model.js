"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const MealSchema = new mongoose_1.Schema({
    providerId: { type: mongoose_1.Schema.ObjectId, ref: 'MealProvider', required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: [String], required: true },
    tags: { type: [String], required: true },
    ingredients: { type: [String], required: true },
    preparationTime: { type: String, required: true },
    portion: { type: [String], required: true },
    ratings: { type: Number, required: true, default: 5 },
    isAvailable: {
        type: String,
        enum: ["Yes", "No"],
        required: true,
        default: "Yes"
    },
}, { timestamps: true });
const Meals = (0, mongoose_1.model)("Meal", MealSchema);
exports.default = Meals;
