import { model, Schema } from "mongoose";
import { IUser, IUserModel, } from "./user.interface";




// Define the User Schema
const userSchema = new Schema<IUser, IUserModel>(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        phone: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        emailVerified: {
            type: Boolean,
            default: false
        },
        address: {
            type: String,
        },
        profileImg: {
            type: String,
            default: ''
        },
        role: {
            type: String,
            enum: ['customer', 'mealProvider'],
            default: 'customer',
            required: true
        }
    },
    { timestamps: true }
);

// Create the User model from the schema
userSchema.statics.isUserExistsByEmail = async function (email: string) {
    return await UserModel.findOne({ email: email });
}


export const UserModel = model<IUser, IUserModel>('User', userSchema);


