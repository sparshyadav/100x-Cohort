const express = require("express");
const connectDatabse = require("./config/databse");
const todoRoutes=require("./routes/todos");
require("dotenv").config();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());

app.use("/todo", todoRoutes);

app.get("/", (req, res)=>{
    res.send(`<h1>This is Homepage of the TODO APP</h1>`);
})

connectDatabse();
app.listen(PORT, () => {
    console.log(`Server Started at PORT: ${PORT}`);
})