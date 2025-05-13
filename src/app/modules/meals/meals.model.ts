import { model, Schema } from "mongoose";
import { IMeals } from "./meals.interface";

const MealSchema = new Schema<IMeals>({
    providerId: { type: Schema.ObjectId, ref: 'MealProvider', required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: [String], required: true },
    tags: { type: [String], required: true },
    ingredients: { type: [String], required: true },
    preparationTime: { type: String, required: true },
    portion: { type: [String], required: true },
    ratings: {
        average: Number,
        count: Number,
        breakdown: {
            5: Number,
            4: Number,
            3: Number,
            2: Number,
            1: Number
        },
        lastRatedAt: Date,
        ratedUsers: [
            {
                userId: Schema.Types.ObjectId,
                rating: Number,
                comment: String,
                date: Date
            }
        ]
    },
    isAvailable: {
        type: String,
        enum: ["Yes", "No"],
        required: true,
        default: "Yes"
    },
}, { timestamps: true });


const Meals = model<IMeals>("Meal", MealSchema);

export default Meals;