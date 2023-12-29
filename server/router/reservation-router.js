const express = require("express")
const router = express.Router()
const reservationForm = require("../controller/reservation-controller")


router.route("/reservation").post(reservationForm)



module.exports = router