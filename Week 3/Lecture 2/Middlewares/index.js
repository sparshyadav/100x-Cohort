const express = require("express");

const app = express();

app.use(express.json());

function userMiddleware(req, res, next) {
    const username = req.headers.username;
    const password = req.headers.password;

    if (username != "sparsh" || password != "pass") {
        return res.status(403).json({
            msg: "Incorrect Username or Password"
        })
    }
    else {
        next();
    }
}

function kidneyMiddleware(req, res, next) {
    const kidneyId = req.query.kidneyId;

    if (kidneyId != 1 && kidneyId != 2) {
        res.send(403).json({
            msg: "Incorrect Inputs"
        })
    }
    else {
        next();
    }
}

app.get("/health-checkup", userMiddleware, kidneyMiddleware, (req, res) => {
    res.send("Your Kidneys are Fine");
})

app.listen(3000, () => {
    console.log("Server Started at PORT: 3000");
})