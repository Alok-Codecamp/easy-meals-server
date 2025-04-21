import { model, Schema } from "mongoose";
import { IMeals } from "./meals.interface";

const MealSchema = new Schema<IMeals>({
    providerId: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: [String], required: true },
    tags: { type: [String], required: true },
    ingredients: { type: [String], required: true },
    preparationTime: { type: String, required: true },
    portion: { type: [String], required: true },
    isAvailable: { type: Boolean, required: true, default: true },
}, { timestamps: true });


const Meals = model<IMeals>("Meal", MealSchema);

export default Meals;