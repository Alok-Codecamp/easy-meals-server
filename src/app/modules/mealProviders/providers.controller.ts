import status from "http-status";
import asyncWraper from "../../utils/asyncWraper";
import sendResponse from "../../utils/sendResponse";
import { mealProviderServices } from "./providers.service";
import MealProvider from "./providers.model";



const createMealProvider = asyncWraper(async (req, res) => {
    const mealProviderData = req.body;
    const result = await mealProviderServices.createMealProviderInToDb(mealProviderData);

    sendResponse(res, {
        status: status.OK,
        success: true,
        message: 'meal provider created successfully',
        data: result
    })
})

// define controller function for get  all MealProvider data 

const getMealProviders = asyncWraper(async (req, res) => {
    const result = await mealProviderServices.getMealProviderFromDb();

    sendResponse(res, {
        status: status.OK,
        success: true,
        message: 'meal provider trive successfully',
        data: result
    })
})
const getMealProviderById = asyncWraper(async (req, res) => {
    const { mealProviderId } = req.params;
    const result = await mealProviderServices.getMealProviderByIDFromDb(mealProviderId);

    sendResponse(res, {
        status: status.OK,
        success: true,
        message: 'meal provider retrive successfully',
        data: result
    })
})


export const mealProviderController = {
    createMealProvider,
    getMealProviders,
    getMealProviderById,
}