import { model, Schema } from "mongoose";
import { IUser, IUserModel, } from "./user.interface";
import bcrypt from "bcrypt";
import config from "../../config/config";



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
            unique: true,
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
        shippingAddress: {
            type: String,
        },
        profileImg: {
            type: String,
            default: 'https://i.ibb.co/2kR9YQx/default-avatar.png'
        },
        role: {
            type: String,
            enum: ['customer', 'mealProvider'],
            default: 'customer',
            required: true
        }
    },
    {
        timestamps: true,
        toJSON: {
            transform: function (doc, ret) {
                delete ret.password;
                return ret
            }
        }
    },
);

userSchema.pre('save', async function (next) {

    this.password = await bcrypt.hash(this.password, Number(config.salt_rounds))
    next();
})

userSchema.post('save', function (next) {

    this.password = ' '

})

// define statics for find user
userSchema.statics.isUserExistsByEmail = async function (email: string) {
    return await UserModel.findOne({ email: email });
}

//derfine statics for match password
userSchema.statics.isPasswordMatched = async function (plainPass, hashedPass) {
    return await bcrypt.compare(plainPass, hashedPass)
}
// Create the User model from the schema
export const UserModel = model<IUser, IUserModel>('User', userSchema);


