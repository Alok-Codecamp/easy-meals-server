import QueryBuilder from "../../queryBuilder/QueryBuilder";
import asyncWraper from "../../utils/asyncWraper";
import { UserModel } from "../user/user.model";
import { cuisineSpecialties } from "./mealProvider.validation";
import { IMealProvider } from "./providers.interface";
import MealProvider from "./providers.model";




const createMealProviderInToDb = async (mealProviderData: IMealProvider, id: string) => {
    const isUserExists = await UserModel.findById(id);

    if (!isUserExists) {
        throw new Error('User not found!!')
    }

    const isMealExists = await MealProvider.findOne({ title: mealProviderData.title })

    if (isMealExists) {
        throw new Error('This Meal already exists in Store!!')
    }
    const mealData = {
        ...mealProviderData,
        mealProvider: id,
    }

    const result = await MealProvider.create(mealData);

    return result;
}

// define function for get all MealProvider data 
const getMealProvidersFromDb = async (query: Record<string, unknown>) => {

    const mealQuery = new QueryBuilder(MealProvider.find(), query).search(["title", "ratings", "mealProvider"]).filter().sort().fields().paginate();

    const result = await mealQuery.modelQuery;
    return result;
}
const getMealProviderByIDFromDb = async (mealProviderId: string) => {

    const result = await MealProvider.find({ mealProvider: mealProviderId });

    if (!result) {
        throw new Error('No Meal provider found!!')
    }

    return result;
}

export const mealProviderServices = {
    createMealProviderInToDb,
    getMealProvidersFromDb,
    getMealProviderByIDFromDb,

}