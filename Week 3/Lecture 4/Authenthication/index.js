const express = require("express");
const jwt = require("jsonwebtoken");

const value = {
    name: "sparsh",
    accountNumber: 123
}

const token = jwt.sign(value, "secret");
console.log(token);