const menu = require('../models/menu-model');

const postMenu = async (req, res) => {
    try {
        console.log(req.file);
        console.log(req.body);
        const { food_name, price, ingredient } = req.body;
        const food_image = req.file.filename;

        const newImage = await menu.create({
            food_image,
            food_name,
            price,
            ingredient,
        });
        await newImage.save()
        res.status(201).json({ message: 'Image uploaded successfully' });
    } catch (error) {
        res.status(400).json({ message: 'Error uploading image', error: error.message });
    }
};

module.exports = { postMenu };
