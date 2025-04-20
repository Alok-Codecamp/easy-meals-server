import { z } from "zod";
import { Types } from "mongoose";

//  Meal Schema

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
    cuisineSpecialties: z.array(cuisineSpecialties),
    availableMealOptions: z.array(z.object({ value: z.string({ required_error: 'At least one meal option is required!' }) })),
    availability: z.array(z.object({ value: z.string({ required_error: 'add when you are available!' }) })),
    pricing: z.object({
        min: z.string(),
        max: z.string(),
    }),
    experience: z.string({ required_error: 'Meal provider exprience is required' }).min(1, { message: 'At least 1 year of relevant experience required.' }),
    customerReviews: z.array(CustomerReviewZodSchema).optional(),
});
