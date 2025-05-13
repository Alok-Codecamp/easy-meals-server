import z from 'zod';
export const RatedUserSchema = z.object({
    userId: z.string().length(24, "Invalid ObjectId"), // if it's passed as string
    rating: z.number().min(1).max(5),
    comment: z.string().min(1).max(500),
    date: z.coerce.date(), // allows ISO string or Date object
});

export const RatingBreakdownSchema = z.object({
    5: z.number().min(0),
    4: z.number().min(0),
    3: z.number().min(0),
    2: z.number().min(0),
    1: z.number().min(0),
});

export const creteMealValidationZodSchema = z.object({
    providerId: z.string().optional(),
    title: z.string().min(1, "Meal title is required"),
    description: z.string().min(1, "Description is required"),
    price: z.string().min(1, "Price is required"),
    image: z.string().min(1, "Price is required"),
    category: z.array(z.string()).refine((value) => value.some((item) => item), {
        message: "You have to select at least one category.",
    }),
    tags: z.array(z.string()).refine((value) => value.some((item) => item), {
        message: "You have to select at least one tag.",
    }),
    ingredients: z.array(z.string()).refine((value) => value.some((item) => item), {
        message: "You have to select at least one tag.",
    }),
    preparationTime: z.string({ required_error: 'preperation time is required !' }),
    portion: z.array(z.string()).refine((value) => value.some((item) => item), {
        message: "You have to select at least one tag.",
    }),
    ratings: z.object({
        average: z.number().min(0).max(5),
        count: z.number().int().min(0),
        breakdown: RatingBreakdownSchema,
        lastRatedAt: z.coerce.date(),
        ratedUsers: z.array(RatedUserSchema),
    }).optional(),
    isAvailable: z.enum(["yes", "no"], {
        required_error: "Meal availability is required",
        invalid_type_error: "Availability must be either 'Yes' or 'No'",
    }),
});

const updateMealValidationZodSchema = creteMealValidationZodSchema.partial();
export const mealValidationSchema = {
    creteMealValidationZodSchema,
    updateMealValidationZodSchema,
}