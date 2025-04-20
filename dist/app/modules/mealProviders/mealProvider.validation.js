"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMealProviderZodSchema = exports.CustomerReviewZodSchema = exports.MealZodSchema = void 0;
const zod_1 = require("zod");
const mongoose_1 = require("mongoose");
//  Meal Schema
exports.MealZodSchema = zod_1.z.object({
    mealTitle: zod_1.z.string().min(1, "Title is required"),
    description: zod_1.z.string().min(1, "Description is required"),
    price: zod_1.z.string().min(1, "Price is required"), // string-based price
    isAvailable: zod_1.z.boolean().default(true),
});
//  Customer Review Schema
exports.CustomerReviewZodSchema = zod_1.z.object({
    rating: zod_1.z.number().min(1).max(5),
    review: zod_1.z.string().min(1, "Review is required"),
    reviewer: zod_1.z
        .string()
        .refine((val) => mongoose_1.Types.ObjectId.isValid(val), {
        message: "Invalid ObjectId for reviewer",
    }),
});
//  Meal Provider Schema
exports.createMealProviderZodSchema = zod_1.z.object({
    MealProvider: zod_1.z.string(),
    title: zod_1.z.string().min(1, "Name is required"),
    cuisineSpecialties: zod_1.z.array(zod_1.z.string().min(1)),
    availableMeals: zod_1.z.array(exports.MealZodSchema),
    pricing: zod_1.z.object({
        min: zod_1.z.number(),
        max: zod_1.z.number(),
    }),
    experience: zod_1.z.number().min(0),
    customerReviews: zod_1.z.array(exports.CustomerReviewZodSchema).optional(),
});
