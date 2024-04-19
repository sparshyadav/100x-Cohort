const express = require("express");
const app = express();

const users = [{
    name: "john",
    Kidneys: [{
        healthy: false
    }, {
        healthy: true
    }]
}]

app.use(express.json());

app.get("/", (req, res) => {
    let johnKidney = users[0]["Kidneys"];
    let totalKidneys = johnKidney.length;

    let healthyKidney = 0;
    johnKidney.filter((kid) => {
        if (kid.healthy == true) {
            healthyKidney++;
        }
    })

    let unhealthyKidney = totalKidneys - healthyKidney;

    res.send(`The Total Number of Kidneys is: ${totalKidneys}
                The Total Number of Healthy Kidneys is: ${healthyKidney}
                The Total Number of Unhealthy Kidneys is: ${unhealthyKidney}`);
})

app.post("/", (req, res)=>{
    const healthy=req.body.healthy;
    users[0].Kidneys.push({
        healthy: healthy
    })

    let johnKidney = users[0]["Kidneys"];
    let totalKidneys = johnKidney.length;

    let healthyKidney = 0;
    johnKidney.filter((kid) => {
        if (kid.healthy == true) {
            healthyKidney++;
        }
    })

    let unhealthyKidney = totalKidneys - healthyKidney;

    res.send(`The Total Number of Kidneys is: ${totalKidneys}
                The Total Number of Healthy Kidneys is: ${healthyKidney}
                The Total Number of Unhealthy Kidneys is: ${unhealthyKidney}`);
})

app.listen(3000, () => {
    console.log("Server Started at Port: 3000");
})