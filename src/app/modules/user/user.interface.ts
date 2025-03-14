import { Model } from "mongoose";

export interface IUser {
    name: string;
    email: string;
    phone: string;
    password: string;
    emailVerified: boolean;
    address?: string;
    profileImg?: string;
    role: "customer" | "mealProvider"
}


export interface IUserModel extends Model<IUser> {
    isUserExistsByEmail(email: string): Promise<IUser>;
}