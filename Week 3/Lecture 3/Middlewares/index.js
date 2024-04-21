const express = require("express");

const app = express();

app.use(express.json());

function isOldEnough(age) {
    if (age >= 14) {
        return true;
    }

    return false;
}

app.get("/ticket", (req, res) => {
    if (isOldEnough(req.query.age)) {
        res.json({
            msg: "You have rode ride 1"
        })
    }
    else {
        res.status(401).json({
            msg: "Your Age is not Enough to Ride ride 1"
        })
    }
})

app.listen(3000, () => {
    console.log("The Server is Running at PORT: 3000");
})