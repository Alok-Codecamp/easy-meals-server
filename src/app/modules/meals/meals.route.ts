import { Router } from "express";
import requestValidator from "../../middleware/requestValidator";
import { mealValidationSchema } from "./mealsValidationZodSchema";
import { authValidator } from "../../middleware/authValidator";
import { mealsController } from "./meals.controller";




const router = Router();
// create meal route 
router.post('/create-meal', requestValidator(mealValidationSchema.creteMealValidationZodSchema), authValidator('mealProvider'), mealsController.createMeal)
//  get all meal route 
router.get('/all-meals', mealsController.getAllMeals);
// get meal by id 
router.get('/:mealId', mealsController.getMealById);
// update meal route 
router.put('/update-meal/:mealId', authValidator('mealProvider'), mealsController.updateMeal)



export const mealRoutes = router;