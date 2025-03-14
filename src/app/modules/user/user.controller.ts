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



export const userController = {
    createUser,
}