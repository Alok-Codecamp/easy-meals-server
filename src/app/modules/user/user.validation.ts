import z from 'zod'


const registerUserValidationSchema = z.object({
    name: z.string({ message: 'User name is required!' }),
    email: z.string({ message: 'User email is required!' }).email({ message: "Email isn't valied" }),
    phone: z.string().optional(),
    password: z.string({ message: 'User password is required!' }),
    shippingAddress: z.string().optional()

})

const updateUserValidationSchema = z.object({
    name: z.string().optional(),
    email: z.string().optional(),
    phone: z.string().optional(),
    password: z.string().optional(),
    shippingAddress: z.string().optional()
})

export const userValidation = {
    registerUserValidationSchema,
    updateUserValidationSchema,
};
