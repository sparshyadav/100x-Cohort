const express=require("express");
const connectDatabase = require("./config/database");
require("dotenv").config();

const PORT=process.env.PORT || 3000;

const app=express();

connectDatabase();
app.listen(PORT, ()=>{
    console.log(`Server Started at PORT ${PORT}`);
})
