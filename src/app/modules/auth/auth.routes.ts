import { Router } from "express";
import { authController } from "./auth.controller";
import { authValidator } from "../../middleware/authValidator";

const router = Router();

router.post('/login', authController.login)
router.post('/refresh', authController.refreshToken)
router.post('/forget-password', authController.forgetPassword)
router.post('/reset-password', authController.resetPassword)




export const authRoutes = router;