import asyncWraper from "../../utils/asyncWraper";
import { userServices } from "./user.service";
import status from 'http-status';

const createUser = asyncWraper(async (req, res) => {
    const result = await userServices.createUserIntoDb(req.body)

    res.status(status.OK).json({
        success: true,
        message: 'user created successfully',
        data: result
    })
})
const getAllUser = asyncWraper(async (req, res) => {
    const result = await userServices.getAllUserFromDb();

    res.status(status.OK).json({
        success: true,
        message: 'users retrive successfully',
        data: result
    })
})
const getUserById = asyncWraper(async (req, res) => {
    const result = await userServices.getUserById(req.params.userId)

    res.status(status.OK).json({
        success: true,
        message: 'user retrive successfully',
        data: result
    })
})
const updateUser = asyncWraper(async (req, res) => {
    console.log('from update user -controler', req.body);
    const result = await userServices.updateUserFromDb(req.body, req.params.userId)

    res.status(status.OK).json({
        success: true,
        message: 'user updated successfully',
        data: result
    })
})



export const userController = {
    createUser,
    getAllUser,
    getUserById,
    updateUser,
}