const mongoose = require("mongoose")


const contactSchema = new mongoose.Schema({

    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
})
// create model for collection 
const Contact = new mongoose.model("Contact", contactSchema)


module.exports = Contact