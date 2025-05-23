import { Router } from "express";;
import { mealProviderController } from "./providers.controller";
import { authValidator } from "../../middleware/authValidator";
import requestValidator from "../../middleware/requestValidator";
import { createMealProviderZodSchema } from "./mealProvider.validation";



const router = Router();

router.post('/create-mealProvider/:providerId', requestValidator(createMealProviderZodSchema), authValidator('mealProvider'), mealProviderController.createMealProvider);

router.get('/all-provider', mealProviderController.getMealProviders)
router.get('/my-profile/:mealProviderId', authValidator('mealProvider', 'customer'), mealProviderController.getMealProviderById)
router.put('/update-profile/:providerId', authValidator('mealProvider'), mealProviderController.updateMealProvider)



export const mealProviderRoutes = router;