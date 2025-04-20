import status from "http-status";
import asyncWraper from "../../utils/asyncWraper";
import sendResponse from "../../utils/sendResponse";
import { mealServices } from "./meals.service";




const createMeal = asyncWraper(async (req, res) => {
    const mealData = req.body;
    const userData = req.user;
    console.log(userData);
    const result = await mealServices.createMealsIntoDb(mealData);

    sendResponse(res, {
        status: status.OK,
        success: true,
        message: 'meal created successfully',
        data: result
    })
})

// define controller function for get  all MealProvider data 

// const getMealProviders = asyncWraper(async (req, res) => {
//     console.log(req.query);
//     const result = await mealProviderServices.getMealProvidersFromDb(req.query);

//     sendResponse(res, {
//         status: status.OK,
//         success: true,
//         message: 'meal provider trive successfully',
//         data: result
//     })
// })
// const getMealProviderById = asyncWraper(async (req, res) => {
//     const { mealProviderId } = req.params;
//     const result = await mealProviderServices.getMealProviderByIDFromDb(mealProviderId);

//     sendResponse(res, {
//         status: status.OK,
//         success: true,
//         message: 'meal provider retrive successfully',
//         data: result
//     })
// })


export const mealsController = {
    createMeal,
}