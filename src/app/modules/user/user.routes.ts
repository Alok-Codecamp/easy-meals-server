import { Router } from "express";
import { userController } from "./user.controller";

const router = Router();


router.post('/register', userController.createUser)

router.get('/users', userController.getAllUser);

router.get('/users/:userEmail', userController.getAllUser);







export const userRoutes = router;