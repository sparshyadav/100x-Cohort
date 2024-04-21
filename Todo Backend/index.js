const express = require("express");
const connectDatabse = require("./config/databse");

const app = express();

connectDatabse();

app.listen(3000, () => {
    console.log("Server Started at PORT: 3000");
})