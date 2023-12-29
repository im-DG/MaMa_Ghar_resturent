const { z } = require("zod")



const loginSchema = z.object({
    email: z
        .string({ required_error: "Email is required" })
        .trim()
        .email({ message: "Invalid email." })
        .min(5, { message: "Email must be at least 5 characters." })
        .max(55, { message: "Email character must be less then 55. " }),
    password: z
        .string({ required_error: "Password is required" })
        .min(7, { message: "Password must be at least 7 characters." })
        .max(205, { message: "Password character must be less then 205." })
})



const signupSchema = loginSchema.extend({
    username: z
        .string({ required_error: "Name is required" })
        .trim()
        .min(3, { message: "Name must be at least 3 characters." })
        .max(35, { message: "Name character must be less then 25. " }),

    phone: z
        .string({ required_error: "Phone number is required" })
        .trim()
        .min(10, { message: "Phone must be at least 10 characters." })
        .max(10, { message: "Phone character must be less then 10. " }),

})
module.exports = { signupSchema, loginSchema };