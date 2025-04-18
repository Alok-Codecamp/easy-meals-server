import { z } from "zod";
import { Types } from "mongoose";

//  Meal Schema
export const MealZodSchema = z.object({
    title: z.string().min(1, "Title is required"),
    description: z.string().min(1, "Description is required"),
    price: z.string().min(1, "Price is required"), // string-based price
    isAvailable: z.boolean(),
});

//  Customer Review Schema
export const CustomerReviewZodSchema = z.object({
    rating: z.number().min(1).max(5),
    review: z.string().min(1, "Review is required"),
    reviewer: z
        .string()
        .refine((val) => Types.ObjectId.isValid(val), {
            message: "Invalid ObjectId for reviewer",
        }),
});

//  Meal Provider Schema
export const createMealProviderZodSchema = z.object({
    MealProvider: z.string(),
    mealName: z.string().min(1, "Name is required"),
    cuisineSpecialties: z.array(z.string().min(1)),
    availableMeals: z.array(MealZodSchema),
    pricing: z.object({
        min: z.number(),
        max: z.number(),
    }),
    experience: z.number().min(0),
    customerReviews: z.array(CustomerReviewZodSchema).optional(),
});
