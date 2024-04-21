const express = require("express");
const jwt = require("jsonwebtoken");

const value = {
    name: "sparsh",
    accountNumber: 123
}

const token = jwt.sign(value, "secret");
console.log("This is Your Token - " + token);

const verifyToken = jwt.verify(token, "secret");
console.log("This is Your Verification - ");
console.log(verifyToken);

const decodedToken = jwt.decode(token);
console.log("This is Your Decoded Token - ")
console.log(decodedToken);