import z from 'zod';



const creteMealValidationZodSchema = z.object({
    mealTitle: z.string().min(1, "Title is required"),
    description: z.string().min(1, "Description is required"),
    price: z.string().min(1, "Price is required"), // string-based price
    image: z.string({ required_error: 'meal image is required' }),
    isAvailable: z.boolean().default(true),
});

export const mealValidationSchema = {
    creteMealValidationZodSchema,
}