const User = require("../models/user-model")
const bcrypt = require("bcrypt")

// For Home Logic

const home = async (req, res) => {
    try {
        console.log(req.body)
        res.status(200).send("this is home")
    } catch (error) {
        console.log(error)
    }
}


// For register Logic
// steps for registers
/*
1.  Get registration data : Retrive user data {username,email,....}
2.  Check email existance : Check if user is already registered or not?
3.  Hash password: Securly hash the password.
4.  Create user : Create a new user with hash password.
5.  Save to DB :Save user data to database.
6.  Respond: Respond with registration successfull or hanlde error.

*/
const register = async (req, res) => {
    try {
        console.log(req.body)
        const { username, email, phone, password } = req.body

        const userExist = await User.findOne({ email: email })

        if (userExist) {
            return res.status(400).json({ message: "You are already registered." })
        }


        const userCreated = await User.create({
            username,
            email,
            phone,
            password
        });

        res.status(201).json(
            {
                msg: "registration successful",
                token: await userCreated.generateToken(),
                userId: await userCreated._id.toString(),
            })
    }
    catch (error) {
        console.log(error)
    }
}


// For Login Logic
const login = async (req, res) => {
    try {
        const { email, password } = req.body

        const userExist = await User.findOne({ email: email })

        if (!userExist) {
            return res.status(400).send({
                msg: "You are not registered Please register."
            })

        }

        const user = await bcrypt.compare(password, userExist.password)

        if (user) {
            res.status(200).json(
                {
                    msg: "login successful",
                    token: await userExist.generateToken(),
                    userId: await userExist._id.toString(),
                })
        } else {
            res.status(401).json({ message: "Invalid email or password" })
        }
    } catch (error) {
        console.log(error)
    }
}



// to send user data logic


const user = async (req, res) => {
    try {
        const userData = req.user
        console.log(userData);
        return res.status(200).json({ userData })

    } catch (error) {
        console.log("error from user", error);
    }
}

module.exports = { home, login, register, user }