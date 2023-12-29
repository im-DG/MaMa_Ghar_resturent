const mongoose = require("mongoose")


const reservationSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    table_no: {
        type: String,
        required: true
    },
    people_count: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },


})



//  Create model for reservation
const reservationModel = new mongoose.model('Reservation', reservationSchema)

module.exports = reservationModel