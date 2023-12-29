const reservationModel = require('../models/reservation-model')



const reservation = async (req, res) => {
    try {
        const response = req.body
        await reservationModel.create(response)
        return res.status(200).json({ message: "Reservation sent successfully." })
    } catch (error) {

        return res.status(500).json({ message: "Reservation not sent." })
    }

}
module.exports = reservation