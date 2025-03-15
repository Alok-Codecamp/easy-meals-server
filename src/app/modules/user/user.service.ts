import { IUser } from "./user.interface";
import { UserModel } from "./user.model";

const createUserIntoDb = async (userData: IUser) => {
    const isUserExist = await UserModel.isUserExistsByEmail(userData.email);
    if (isUserExist) {
        throw new Error('You are registerd. Please Login!')
    }
    const result = await UserModel.create(userData)
    if (!result) {
        throw new Error('Ragistration faild!')
    }
    return result;
}

const getAllUserFromDb = async () => {
    const result = await UserModel.find();
    if (!result) {
        throw new Error('No user found!')
    }
    return result;
}

const getUserByEmail = async (userEmail: string) => {
    const result = await UserModel.isUserExistsByEmail(userEmail);
    if (!result) {
        throw new Error('No user found!')
    }
    return result;
}

export const userServices = {
    createUserIntoDb,
    getAllUserFromDb,
    getUserByEmail,
}