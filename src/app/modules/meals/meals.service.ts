import QueryBuilder from "../../queryBuilder/QueryBuilder";
import MealProvider from "../mealProviders/providers.model";
import { searchAbleFields } from "./constants";
import { IMeals } from "./meals.interface";
import Meals from "./meals.model";



const createMealsIntoDb = async (payload: IMeals) => {

    const isMealproviderExists = await MealProvider.findById(payload.providerId);

    if (!isMealproviderExists) {

        throw new Error('Meal Provider not found !!');
    }

    const result = await Meals.create(payload);

    return result;
}

const getAllMealsFromDb = async (search: Record<string, unknown>) => {

    const mealsQuery = new QueryBuilder(Meals.find(), search).search(searchAbleFields).filter().sort().fields().paginate();
    const result = await mealsQuery.modelQuery;
    return result;
}

// define service function find meal by id 
const getMealByIdFromDb = async (mealId: string) => {

    const result = await Meals.findById(mealId)

    return result;
}

// define service function for update meal 
const updateMealIntoBd = async (payload: IMeals, mealId: string) => {

    const isMealproviderExists = await MealProvider.findById(payload.providerId);

    if (!isMealproviderExists) {

        throw new Error('Meal Provider not found !!');
    }
    const isMealExists = await Meals.findById(mealId)

    if (!isMealExists) {

        throw new Error('Meal not found !!');
    }

    const result = await Meals.findOneAndUpdate({ _id: mealId }, payload, { new: true });

    return result;
}

export const mealServices = {
    createMealsIntoDb,
    getAllMealsFromDb,
    getMealByIdFromDb,
    updateMealIntoBd,
}