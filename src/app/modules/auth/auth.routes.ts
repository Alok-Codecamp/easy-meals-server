import { Router } from "express";
import { authController } from "./auth.controller";

const router = Router();

router.post('/login', authController.login)
router.post('/refresh', authController.refreshToken)
router.post('/forget-password', authController.forgetPassword)





export const authRoutes = router;