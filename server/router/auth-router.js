const express = require("express")
const router = express.Router()
const authcontroller = require("../controller/auth-controller") //{ home, login, register } instead of this we can use authcontroller.
const { signupSchema, loginSchema } = require("../validators/auth-validator")
const authMiddleware = require("../middlewares/auth-middleware")
const validate = require("../middlewares/validate-midddleware")

router.route("/").get(authcontroller.home)

router.route("/register").post(validate(signupSchema), authcontroller.register)

router.route("/login").post(validate(loginSchema), authcontroller.login)

router.route("/user").get(authMiddleware, authcontroller.user)


module.exports = router;