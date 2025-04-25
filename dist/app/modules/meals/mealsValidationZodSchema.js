"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mealValidationSchema = exports.creteMealValidationZodSchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.creteMealValidationZodSchema = zod_1.default.object({
    providerId: zod_1.default.string().optional(),
    title: zod_1.default.string().min(1, "Meal title is required"),
    description: zod_1.default.string().min(1, "Description is required"),
    price: zod_1.default.string().min(1, "Price is required"),
    image: zod_1.default.string().min(1, "Price is required"),
    category: zod_1.default.array(zod_1.default.string()).refine((value) => value.some((item) => item), {
        message: "You have to select at least one category.",
    }),
    tags: zod_1.default.array(zod_1.default.string()).refine((value) => value.some((item) => item), {
        message: "You have to select at least one tag.",
    }),
    ingredients: zod_1.default.array(zod_1.default.string()).refine((value) => value.some((item) => item), {
        message: "You have to select at least one tag.",
    }),
    preparationTime: zod_1.default.string({ required_error: 'preperation time is required !' }),
    portion: zod_1.default.array(zod_1.default.string()).refine((value) => value.some((item) => item), {
        message: "You have to select at least one tag.",
    }),
    ratings: zod_1.default.number().optional(),
    isAvailable: zod_1.default.enum(["yes", "no"], {
        required_error: "Meal availability is required",
        invalid_type_error: "Availability must be either 'Yes' or 'No'",
    }),
});
const updateMealValidationZodSchema = exports.creteMealValidationZodSchema.partial();
exports.mealValidationSchema = {
    creteMealValidationZodSchema: exports.creteMealValidationZodSchema,
    updateMealValidationZodSchema,
};
