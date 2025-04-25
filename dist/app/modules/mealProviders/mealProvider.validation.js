"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMealProviderZodSchema = exports.cuisineSpecialties = exports.CustomerReviewZodSchema = void 0;
const zod_1 = require("zod");
//  Meal Schema
//  Customer Review Schema
exports.CustomerReviewZodSchema = zod_1.z.object({
    rating: zod_1.z.number().min(1).max(5),
    review: zod_1.z.string().min(1, "Review is required"),
    reviewer: zod_1.z
        .string()
});
exports.cuisineSpecialties = zod_1.z.object({
    value: zod_1.z.string()
});
//  Meal Provider Schema
exports.createMealProviderZodSchema = zod_1.z.object({
    title: zod_1.z.string({ required_error: 'Meal provider title is required!' }).min(1, { message: "meal provider titile should be at least one charecter long" }),
    cuisineSpecialties: zod_1.z.array(exports.cuisineSpecialties),
    availableMealOptions: zod_1.z.array(zod_1.z.string({ required_error: 'Please Select at least one Available meal options' })).min(1, { message: 'select at least one option' }),
    availability: zod_1.z.array(zod_1.z.string({ required_error: 'Please Select at least one Availability options' })).min(1, { message: 'select at least one option' }),
    pricing: zod_1.z.object({
        min: zod_1.z.string(),
        max: zod_1.z.string(),
    }),
    experience: zod_1.z.string({ required_error: 'Meal provider exprience is required' }).min(1, { message: 'At least 1 year of relevant experience required.' }),
    customerReviews: zod_1.z.array(exports.CustomerReviewZodSchema).optional(),
});
