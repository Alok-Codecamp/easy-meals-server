import status from "http-status";
import asyncWraper from "../../utils/asyncWraper";
import sendResponse from "../../utils/sendResponse";
import { mealProviderServices } from "./providers.service";




const createMealProvider = asyncWraper(async (req, res) => {
    const mealProviderData = req.body;
    const providerId = req.params.providerId;
    console.log('backend id', req.user.id);
    const result = await mealProviderServices.createMealProviderInToDb(mealProviderData, providerId);

    sendResponse(res, {
        status: status.OK,
        success: true,
        message: 'meal provider created successfully',
        data: result
    })
})

// define controller function for get  all MealProvider data 

const getMealProviders = asyncWraper(async (req, res) => {
    console.log(req.query);
    const result = await mealProviderServices.getMealProvidersFromDb(req.query);

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
const updateMealProvider = asyncWraper(async (req, res) => {
    const mealProviderData = req.body;
    const providerId = req.params.providerId;
    console.log(providerId);
    const result = await mealProviderServices.updateProviderInToDb(mealProviderData, providerId);

    sendResponse(res, {
        status: status.OK,
        success: true,
        message: 'meal provider updated successfully',
        data: result
    })
})

export const mealProviderController = {
    createMealProvider,
    getMealProviders,
    getMealProviderById,
    updateMealProvider
}