const express = require("express");
const zod = require("zod");

const schema = zod.array(zod.number());

const app = express();

app.use(express.json());

app.post("/health-checkup", (req, res) => {
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys);

    if(!response.success){
        res.status(411).json({
            msg: "Input is Invalid"
        })
    }
    else{
        res.send({
            response
        })
    }
})

app.listen(3000, () => {
    console.log("Server Started at PORT: 3000");
})