import { Model } from "mongoose";
import { USER_ROLE } from "./user.constant";

export interface IUser {
    name: string;
    email: string;
    phone: string;
    password: string;
    emailVerified: boolean;
    shippingAddress?: string;
    profileImg?: string;
    role: "customer" | "mealProvider"
}

export type TUserRole = keyof typeof USER_ROLE;
export interface IUserModel extends Model<IUser> {
    isUserExistsByEmail(email: string): Promise<IUser>;
    isPasswordMatched(plainPass: string, hashedPass: string): Promise<boolean>
}