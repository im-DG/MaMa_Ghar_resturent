
const User = require("../models/user-model")


const adminUser = async (req, res) => {
    try {
        const response = await User.find({}, { password: 0 })
        console.log(response);
        if (!response || response.length === 0) {
            res.status(400).json({ msg: "No data found" })
        }
        res.status(200).json({ msg: response })


    } catch (error) {
        next(error)
    }
}
module.exports = adminUser