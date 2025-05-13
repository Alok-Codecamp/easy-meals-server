import { Router } from "express";
import { userController } from "./user.controller";
import { authValidator } from "../../middleware/authValidator";

const router = Router();


router.post('/register', userController.createUser)

router.get('/users', userController.getAllUser);

router.get('/my-profile/:userId', authValidator('customer', 'mealProvider'), userController.getUserById);

router.put('/update-profile/:userId', authValidator('customer', 'mealProvider'), userController.updateUser)




export const userRoutes = router;