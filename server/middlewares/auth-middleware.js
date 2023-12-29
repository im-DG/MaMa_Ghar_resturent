const User = require("../models/user-model")
const jwt = require("jsonwebtoken")


const authMiddleware = async (req, res, next) => {


    const token = req.header("Authorization")


    if (!token) {
        return res.status(401).json({ msg: "Unathorized HTTP,token not provided." })
    }

    const jwtToken = token.replace("Bearer", "").trim()
    console.log("Token", token);
    try {

        const isVarified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY)
        const userData = await User.findOne({ email: isVarified.email }).select({ password: 0 })
        console.log(userData);

        req.user = userData
        req.token = token
        req.userId = userData._id

        next()
    } catch (error) {
        return res.status(401).json({ msg: "Unathorized HTTP,token not provided." })

    }
}
module.exports = authMiddleware