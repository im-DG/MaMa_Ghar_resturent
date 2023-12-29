const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    title: String,
    image: String,
});

const Image = mongoose.model('Image', imageSchema);

module.exports = Image;
