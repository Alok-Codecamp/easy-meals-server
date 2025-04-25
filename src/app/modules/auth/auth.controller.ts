import status from "http-status";
import asyncWraper from "../../utils/asyncWraper";
import { authServices } from "./auth.service";
import sendResponse from "../../utils/sendResponse";
import config from "../../config/config";


const login = asyncWraper(async (req, res) => {
    const result = await authServices.login(req.body)

    const { accessToken, refreshToken } = result;
    res.cookie('refreshToken', refreshToken, {
        secure: config.app_mode === 'production',
        sameSite: 'none',
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
    })
    sendResponse(res, {
        status: status.OK,
        success: true,
        message: 'login successfully',
        data: result
    })
})

// RiceOverLoads$2565
const refreshToken = asyncWraper(async (req, res) => {

    const { refreshToken } = req.cookies;
    const result = await authServices.refreshToken(refreshToken);

    sendResponse(res, {
        status: status.OK,
        success: true,
        message: 'refresh token generated successfully',
        data: result
    })
})
const forgetPassword = asyncWraper(async (req, res) => {


    const result = await authServices.forgetPassword(req?.body?.email);

    sendResponse(res, {
        status: status.OK,
        success: true,
        message: 'password reset link send to your email',
        data: result
    })
})

const resetPassword = asyncWraper(async (req, res) => {
    console.log(req.body);
    const result = await authServices.resetPassword(req.body)

    sendResponse(res, {
        status: status.OK,
        success: true,
        message: 'password reset successfull custom',
        data: result
    })
})
export const authController = {
    login,
    refreshToken,
    forgetPassword,
    resetPassword,
}