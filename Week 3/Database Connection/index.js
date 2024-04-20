const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose")

const jwtPassword = "12345";

mongoose.connect(
    "mongodb+srv://sparshyadavmrt:OyzUyLzVS7yiUg5J@cluster0.qvl6t0z.mongodb.net/user_app"
)

const User = mongoose.model("User", {
    name: String,
    username: String,
    password: String
})

const app = express();
app.use(express.json());

function userExists(username, password) {
    let user = false;

    ALL_USERS.forEach((user) => {
        if (user.username === username) {
            if (user.password == password) {
                user = true;
            }
        }
    })

    return user;
}

app.post("/signup", async (req, res) => {
    const username = req.body.username;
    const name = req.body.name;
    const password = req.body.password;

    const existingUser = await User.findOne({ username: username });

    if (existingUser) {
        return res.status(400).send("Username Already Exists");
    }

    const user = new User({
        username: username,
        name: name,
        password: password
    })

    user.save();

    res.json({
        msg: "User Added Successfully"
    })
})

app.post("/signin", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    if (userExists(username, password)) {
        return res.status(403).json({
            msg: "User doesn't Exist in Memory"
        })
    }

    var token = jwt.sign({ username: username }, jwtPassword);

    return res.json({
        token
    })
})

app.get("/users", (req, res) => {
    const token = req.headers.authorization;
    const decode = jwt.verify(token, jwtPassword);
    const username = decode.username;

    if (decode) {
        res.json({
            users: ALL_USERS.filter((user) => {
                if (user.username !== username) {
                    return user;
                }
            })
        })
    }

    res.send("Some Error Occurred");
})

app.listen(3000, () => {
    console.log("Server Started at PORT: 3000");
})