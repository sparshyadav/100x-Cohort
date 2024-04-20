const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "12345";

const app = express();

app.use(express.json());

const ALL_USERS = [
    {
        username: "sparshyadav@gmail.com",
        password: "123",
        name: "sparsh yadav"
    },
    {
        username: "swetashreya@gmail.com",
        password: "456",
        name: "sweta shreya"
    },
    {
        username: "harkirat@gmail.com",
        password: "789",
        name: "harkirat singh"
    }
]

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

app.get("/users", (req, res)=>{
    const token=req.headers.authorization;
    const decode=jwt.verify(token, jwtPassword);

    res.json({
        users: ALL_USERS
    })
})

app.listen(3000, () => {
    console.log("Server Started at PORT: 3000");
})