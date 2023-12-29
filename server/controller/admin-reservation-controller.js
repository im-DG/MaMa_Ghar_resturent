const reservationModel = require("../models/reservation-model")

const adminReservation = async (req, res) => {
    try {
        const user_reservation = await reservationModel.find()

        if (!user_reservation || user_reservation.length === 0) {
            res.status(400).json({ msg: "Data not found" })
        }
        res.status(200).json(user_reservation)
    } catch (error) {
        console.log("error from admin reservation contact", error);
    }
}

module.exports = adminReservation
