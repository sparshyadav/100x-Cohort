const express=require("express");
const connectDatabase = require("./config/database");
const blogRoutes=require("./routes/blog");
require("dotenv").config();

const PORT=process.env.PORT || 3000;
const app=express();

app.use(express.json());

app.get("/", (req, res)=>{
    res.send(`<h1>This is Homepage for Blog APP</h1>`)
})


connectDatabase();
app.listen(PORT, ()=>{
    console.log(`Server Started at PORT ${PORT}`);
})
