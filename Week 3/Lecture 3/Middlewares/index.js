const express = require("express");

const app = express();

app.use(express.json());

function isOldEnough(req, res, next) {
    const age = req.query.age;

    if (age >= 14) {
        next();
    }

    res.json({
        msg: "You are not Old Enough"
    })
}

app.get("/ticket", isOldEnough, (req, res) => {
    res.json({
        msg: "You have rode ride 1"
    })

})

app.listen(3000, () => {
    console.log("The Server is Running at PORT: 3000");
})