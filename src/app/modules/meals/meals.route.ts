import { Router } from "express";
import requestValidator from "../../middleware/requestValidator";
import { mealValidationSchema } from "./mealsValidationZodSchema";




const router = Router();

router.post('/create-meal', requestValidator(mealValidationSchema.creteMealValidationZodSchema))

// router.get('/all-meals', authValidator('customer'), mealProviderController.getMealProviders)
// router.get('/my-profile/:mealProviderId', authValidator('mealProvider', 'customer'), mealProviderController.getMealProviderById)



export const mealRoutes = router;