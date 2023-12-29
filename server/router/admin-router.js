const express = require("express")
const adminUser = require("../controller/admin-user-controller")
const adminContact = require("../controller/admin-contact-controller")
const adminReservation = require("../controller/admin-reservation-controller")
const addMenuController = require("../controller/admin-menu-controller")
const router = express.Router()
const multer = require('multer');
const path = require("path")


// Set up Multer for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads');
    },
    filename: function (req, file, cb) {
        console.log(req.file);
        cb(null, Date.now() + path.extname(file.originalname));
    },
});
const upload = multer({ storage: storage }).single('food_image');


router.route("/user").get(adminUser)
router.route("/contact").get(adminContact)
router.route("/reservation").get(adminReservation)
router.route("/addMenu").post(upload, addMenuController.postMenu)

module.exports = router