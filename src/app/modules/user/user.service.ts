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

const getUserById = async (id: string) => {
    const result = await UserModel.findById(id);
    if (!result) {
        throw new Error('No user found!')
    }
    return result;
}

const updateUserFromDb = async (payload: { name: string; email: string; phone: string; }, id: string) => {
    const isUserExist = await UserModel.findById(id);
    if (!isUserExist) {
        throw new Error('This user does not exists!!')
    }
    const result = await UserModel.findByIdAndUpdate(id, payload);
    if (!result) {
        throw new Error('Faild to update!')
    }
    return result;
}



export const userServices = {
    createUserIntoDb,
    getAllUserFromDb,
    getUserById,
    updateUserFromDb,
}