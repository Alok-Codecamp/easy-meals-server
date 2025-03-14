import { IUser } from "./user.interface";
import { UserModel } from "./user.model";

const createUserIntoDb = async (userData: IUser) => {
    const isUserExist = await UserModel.isUserExistsByEmail(userData.email);
    if (isUserExist) {
        throw new Error('You are registerd. Please Login!')
    }
    const result = await UserModel.create(userData)
    return userData;
}


export const userServices = {
    createUserIntoDb,
}