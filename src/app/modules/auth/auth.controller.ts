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
        httpOnly: true,
    })
    sendResponse(res, {
        status: status.OK,
        success: true,
        message: 'login successfully',
        data: result
    })
})

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


export const authController = {
    login,
    refreshToken,
    forgetPassword,
}