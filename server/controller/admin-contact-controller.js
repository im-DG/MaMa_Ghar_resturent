const Contact = require("../models/contact-model")


const adminContact = async (req, res) => {
    try {
        const user_contact = await Contact.find();
        if (!user_contact || user_contact.length === 0) {
            res.status(404).json({ msg: "data not found" })
        }
        res.status(200).json(user_contact)
    } catch (error) {
        console.log(error);
    }
}
module.exports = adminContact