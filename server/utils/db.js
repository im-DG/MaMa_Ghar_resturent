const mongoose = require("mongoose")

// const URL = "mongodb://127.0.0.1:27017/MERN_admin"
const URL = process.env.MONGODB_URL;



const connectDB = async () => {
    try {
        await mongoose.connect(URL)
        console.log("Database connected successfully.");
    } catch (error) {
        console.log("Database connection failed.");
        process.exit(0);
    }
}
module.exports = connectDB;