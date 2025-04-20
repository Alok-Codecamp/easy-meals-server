import { model, Schema } from "mongoose";
import { IMeals } from "./meals.interface";

const MealSchema = new Schema<IMeals>({
    mealProvider: { type: Schema.ObjectId, ref: 'MealProvider', required: true },
    mealTitle: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
    image: { type: String, required: true },
    isAvailable: { type: Boolean, required: true, default: true },

});

const Meals = model<IMeals>("Meal", MealSchema);

export default Meals;