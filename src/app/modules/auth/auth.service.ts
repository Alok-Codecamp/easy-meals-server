
import { sendMail } from "../../utils/sendMail";
import config from "../../config/config";
import { UserModel } from "../user/user.model"
import { createToken, verifyToken } from "./auth.utils";



const login = async (loginData: { contact: string, password: string }) => {
    const { contact, password } = loginData;
    // console.log(loginData);
    const isUserExists = await UserModel.findOne({ $or: [{ email: contact }, { phone: contact }] });
    // console.log(isUserExists);
    if (!isUserExists) {
        throw new Error('Invalid Email or Phone')
    }
    const isPasswordMatched = await UserModel.isPasswordMatched(password, isUserExists?.password as string);

    if (!isPasswordMatched) {
        throw new Error('Invalid password!!')
    }
    const jwtPayload = {
        contact,
        role: isUserExists?.role
    }
    const accessToken = createToken(jwtPayload, config.jwt_access_secret as string, config.jwt_access_expiresIn as string);
    const refreshToken = accessToken;

    return {
        accessToken,
        refreshToken,
    };
}

const refreshToken = async (token: string) => {

    const decoded = verifyToken(token, config.jwt_access_secret as string);

    const { contact, role } = decoded;

    const isUserExists = await UserModel.findOne({ $or: [{ email: contact }, { phone: contact }] })
    if (!isUserExists) {
        throw new Error('Invalid Email or Phone')
    }
    const jwtPayload = {
        contact,
        role,
    }
    const newToken = createToken(jwtPayload, config.jwt_access_secret as string, config.jwt_access_expiresIn as string)

    return newToken;
}


const forgetPassword = async (email: string) => {
    const isUserExists = await UserModel.isUserExistsByEmail(email);

    if (!isUserExists) {
        throw new Error('No user found!!')
    }

    const jwtPayload = {
        contact: isUserExists.email,
        role: isUserExists.role,
    }

    const resetToken = createToken(jwtPayload, config.jwt_access_secret as string, config.jwt_access_expiresIn as string);

    const resetUrl = `http://localhost:5173/reset-password?email=${isUserExists.email}&token=${resetToken}`

    const responseEmail = await sendMail(isUserExists.email, resetUrl);

    return responseEmail;
}


export const authServices = {
    login,
    refreshToken,
    forgetPassword,

}