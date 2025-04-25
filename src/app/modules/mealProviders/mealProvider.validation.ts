import { z } from "zod";
import { Types } from "mongoose";
import { title } from "process";

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
    title: z.string({ required_error: 'Meal provider title is required!' }).min(1, { message: "meal provider titile should be at least one charecter long" }),
    cuisineSpecialties: z.array(cuisineSpecialties),
    availableMealOptions: z.array(z.string({ required_error: 'Please Select at least one Available meal options' })).min(1, { message: 'select at least one option' }),
    availability: z.array(z.string({ required_error: 'Please Select at least one Availability options' })).min(1, { message: 'select at least one option' }),
    pricing: z.object({
        min: z.string(),
        max: z.string(),
    }),
    experience: z.string({ required_error: 'Meal provider exprience is required' }).min(1, { message: 'At least 1 year of relevant experience required.' }),
    customerReviews: z.array(CustomerReviewZodSchema).optional(),
});
