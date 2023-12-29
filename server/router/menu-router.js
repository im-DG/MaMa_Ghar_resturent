const express = require("express")
const getAllItems = require("../controller/menu-controller")

const router = express.Router()


router.route("/menu").get(getAllItems)


module.exports = router