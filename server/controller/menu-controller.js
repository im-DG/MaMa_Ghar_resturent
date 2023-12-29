const menu = require("../models/menu-model")


const getAllItems = async (req, res) => {
    try {

        const response = await menu.find()


        if (!response) {
            res.status(400).json({ msg: "No data found." })
            return;
        }
        res.status(200).json({ msg: response })
        console.log(response);

    } catch (error) {
        console.log("menu erroe:", error);
    }



}
module.exports = getAllItems