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
        return res.send(403).json({
            msg: "Incorrect Inputs"
        })
    }
    else {
        next();
    }
}

app.get("/health-checkup", (req, res) => {
    const kidneys=req.query.kidneyId;
    const kidneyCount=kidneys.length;

    res.send(kidneyCount);
})

app.use((err, req, res, next)=>{
    res.json({
        msg: "Sorry Something is Up with the Server"
    })
})

app.listen(3000, () => {
    console.log("Server Started at PORT: 3000");
})