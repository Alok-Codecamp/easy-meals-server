import MealProvider from "../mealProviders/providers.model";
import { IMeals } from "./meals.interface";
import Meals from "./meals.model";



const createMealsIntoDb = async (payload: IMeals) => {

    const isMealproviderExists = await MealProvider.findById(payload.mealProvider);

    if (!isMealproviderExists) {

        throw new Error('Meal Provider not found !!');
    }

    const result = await Meals.create(payload);

    return result;
}


export const mealServices = {
    createMealsIntoDb,
}