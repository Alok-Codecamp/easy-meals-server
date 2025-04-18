import asyncWraper from "../../utils/asyncWraper";
import { IMealProvider } from "./providers.interface";
import MealProvider from "./providers.model";




const createMealProviderInToDb = async (mealProviderData: IMealProvider) => {

    const isMealExists = await MealProvider.findOne({ name: mealProviderData.name })

    if (isMealExists) {
        throw new Error('This Meal already exists in Store!!')
    }
    const result = await MealProvider.create(mealProviderData);

    return result;
}

// define function for get all MealProvider data 
const getMealProviderFromDb = async () => {

    const result = await MealProvider.find();

    return result;
}
const getMealProviderByIDFromDb = async (mealProviderId: string) => {
    // console.log(mealProviderId);
    const result = await MealProvider.findById(mealProviderId);
    console.log(result);
    if (!result) {
        throw new Error('No Meal provider found!!')
    }

    return result;
}




export const mealProviderServices = {
    createMealProviderInToDb,
    getMealProviderFromDb,
    getMealProviderByIDFromDb,

}