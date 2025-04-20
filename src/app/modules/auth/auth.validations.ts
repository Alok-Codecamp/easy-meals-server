import z from 'zod'



const loginValidationSchema = z.object({
    contact: z.string({ message: 'Email or Phone is required!!' }),
    password: z.string({ message: 'Password is required!' })
})


export const authValidations = { loginValidationSchema };