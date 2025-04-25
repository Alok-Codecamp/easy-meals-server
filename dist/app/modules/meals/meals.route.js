"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mealRoutes = void 0;
const express_1 = require("express");
const requestValidator_1 = __importDefault(require("../../middleware/requestValidator"));
const mealsValidationZodSchema_1 = require("./mealsValidationZodSchema");
const authValidator_1 = require("../../middleware/authValidator");
const meals_controller_1 = require("./meals.controller");
const router = (0, express_1.Router)();
// create meal route 
router.post('/create-meal', (0, requestValidator_1.default)(mealsValidationZodSchema_1.mealValidationSchema.creteMealValidationZodSchema), (0, authValidator_1.authValidator)('mealProvider'), meals_controller_1.mealsController.createMeal);
//  get all meal route 
router.get('/all-meals', meals_controller_1.mealsController.getAllMeals);
// get meal by id 
router.get('/:mealId', meals_controller_1.mealsController.getMealById);
// update meal route 
router.put('/update-meal/:mealId', (0, authValidator_1.authValidator)('mealProvider'), meals_controller_1.mealsController.updateMeal);
exports.mealRoutes = router;
