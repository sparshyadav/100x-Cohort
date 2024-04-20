const express = require("express");

const app = express();

app.use(express.json());

app.get("/health-checkup", (req, res) => {
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.query.kidneyId;

    if (username != "sparsh" || password != "pass") {
        return res.status(400).json({
            msg: "Something is Wrong with Username or Password"
        })
    }

    if (kidneyId != 1 && kidneyId != 2) {
        return res.status(400).json({
            msg: "Something is Wrong with your Inputs"
        })
    }

    res.json({
        msg: "Your Kidneys are Fine"
    })
})

app.listen(3000, () => {
    console.log("Server Started at PORT: 3000");
})