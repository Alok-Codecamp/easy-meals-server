import { Router } from "express";;
import { mealProviderController } from "./providers.controller";
import { authValidator } from "../../middleware/authValidator";



const router = Router();

router.post('/create-mealProvider', authValidator('mealProvider'), mealProviderController.createMealProvider)
router.get('/mealProvider', mealProviderController.getMealProviders)
router.post('mealProvider/:mealProviderId', authValidator('mealProvider'), mealProviderController.getMealProviderById)



export const mealProviderRoutes = router;