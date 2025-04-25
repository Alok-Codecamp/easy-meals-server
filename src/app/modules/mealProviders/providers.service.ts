import QueryBuilder from "../../queryBuilder/QueryBuilder";
import asyncWraper from "../../utils/asyncWraper";
import { UserModel } from "../user/user.model";
import { cuisineSpecialties } from "./mealProvider.validation";
import { IMealProvider } from "./providers.interface";
import MealProvider from "./providers.model";




const createMealProviderInToDb = async (payload: IMealProvider, id: string) => {
    console.log('front end id ', id);

    const isUserExists = await UserModel.findById(id);

    if (!isUserExists) {
        throw new Error('User not found!!')
    }
    const isMealProviderAlreadyExists = await MealProvider.findOne({ mealProvider: id })

    if (isMealProviderAlreadyExists) {
        throw new Error('Oh! You alredy have a Meal provider profile !! You can create only one profile')
    }


    const result = await MealProvider.create(payload);

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

const updateProviderInToDb = async (payload: IMealProvider, id: string) => {

    console.log('updateProviderservide', id);
    const isUserExists = await UserModel.findById(id);

    if (!isUserExists) {
        throw new Error('User not found!!')
    }
    const isMealProviderAlreadyExists = await MealProvider.findOne({ mealProvider: id })

    if (!isMealProviderAlreadyExists) {
        throw new Error('meal provider not found')
    }


    const result = await MealProvider.findOneAndUpdate({ mealProvider: id }, payload, { new: true });

    return result;
}


export const mealProviderServices = {
    createMealProviderInToDb,
    getMealProvidersFromDb,
    getMealProviderByIDFromDb,
    updateProviderInToDb

}