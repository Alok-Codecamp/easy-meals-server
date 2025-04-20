import { z } from "zod";
import { Types } from "mongoose";

//  Meal Schema
export const MealZodSchema = z.object({
    mealTitle: z.string().min(1, "Title is required"),
    description: z.string().min(1, "Description is required"),
    price: z.string().min(1, "Price is required"), // string-based price
    image: z.string({ required_error: 'meal image is required' }),
    isAvailable: z.boolean().default(true),
});

//  Customer Review Schema
export const CustomerReviewZodSchema = z.object({
    rating: z.number().min(1).max(5),
    review: z.string().min(1, "Review is required"),
    reviewer: z
        .string()
});

export const cuisineSpecialties = z.object({
    value: z.string()
})

//  Meal Provider Schema
export const createMealProviderZodSchema = z.object({
    title: z.string().min(1, "Name is required"),
    cuisineSpecialties: z.array(cuisineSpecialties),
    availableMeals: z.array(MealZodSchema),
    pricing: z.object({
        min: z.string(),
        max: z.string(),
    }),
    experience: z.string().min(0),
    customerReviews: z.array(CustomerReviewZodSchema).optional(),
});
