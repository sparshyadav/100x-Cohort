const users = [{
    firstName: "Sparsh",
    gender: "Male"
},
{
    firstName: "Shreya",
    gender: "Female"
},
{
    firstName: "Aditya",
    gender: "Male"
}]

for (let i = 0; i < users.length; i++) {
    if (users[i].gender == "Male") {
        console.log(users[i].firstName);
    }
}

