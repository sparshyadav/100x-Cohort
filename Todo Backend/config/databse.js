const mongoose = require("mongoose");
require("dotenv").config();

const connectDatabse = async () => {
    const isConnected = await mongoose.connect(process.env.DATABASE_URL);

    if (isConnected) {
        console.log("Database Connection Established");
    }
    else {
        console.log("Issue in Establishing Connection with Database");
    }
}

module.exports = connectDatabse;