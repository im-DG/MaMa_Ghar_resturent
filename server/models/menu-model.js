const mongoose = require('mongoose')
const menuSchema = new mongoose.Schema({
    food_image: {
        type: String,
        required: true
    },
    food_name: {
        type: String,
        required: true

    },
    price: {
        type: String,
        required: true
    },
    ingredient: {
        type: String,
        required: true
    }
})

const menu = new mongoose.model("Menu", menuSchema)
module.exports = menu