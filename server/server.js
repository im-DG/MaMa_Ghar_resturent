require("dotenv").config();
const express = require("express")
const app = express()
const cors = require("cors")
const authRoute = require('./router/auth-router')
const contactRoute = require("./router/contact-router")
const reservationRoute = require("./router/reservation-router")
const menuRoute = require("./router/menu-router")
const connectDB = require("./utils/db")
const adminRoute = require("./router/admin-router")
const PORT = 2024
const path = require("path")

// for cors

const corsOptions = {
    origin: '*',
    methods: "GET,POST,PUT,DELETE,PATCH,HEAD",
    credential: true,
}

app.use(cors(corsOptions))


app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use("/api/reserve", reservationRoute);
app.use("/api/data", menuRoute);

// for admin route

app.use("/api/admin", adminRoute)


connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running at port ${PORT}.`)
    })
})