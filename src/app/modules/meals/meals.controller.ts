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

// define controller function for get  all meal data 

const getAllMeals = asyncWraper(async (req, res) => {
    const result = await mealServices.getAllMealsFromDb(req.query);

    sendResponse(res, {
        status: status.OK,
        success: true,
        message: 'meal rtrive successfully',
        data: result
    })
})

// defaine controller function for get meal by id 
const getMealById = asyncWraper(async (req, res) => {
    const { mealId } = req.params;

    const result = await mealServices.getMealByIdFromDb(mealId);

    sendResponse(res, {
        status: status.OK,
        success: true,
        message: 'meal rtrive successfully',
        data: result
    })
})

// define controller function for update meal 
const updateMeal = asyncWraper(async (req, res) => {
    const mealId = req.params.mealId;
    console.log(req.body);
    const result = await mealServices.updateMealIntoBd(req.body, mealId)

    sendResponse(res, {
        status: status.OK,
        success: true,
        message: 'meal updated successfully',
        data: result
    })
})


export const mealsController = {
    createMeal,
    getAllMeals,
    getMealById,
    updateMeal,
}