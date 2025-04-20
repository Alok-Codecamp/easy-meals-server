import { Router } from "express";
import { authController } from "./auth.controller";
import { authValidator } from "../../middleware/authValidator";
import requestValidator from "../../middleware/requestValidator";
import { authValidations } from "./auth.validations";

const router = Router();

router.post('/login', requestValidator(authValidations.loginValidationSchema), authController.login)
router.post('/refresh', authController.refreshToken)
router.post('/forget-password', authController.forgetPassword)
router.post('/reset-password', authController.resetPassword)




export const authRoutes = router;