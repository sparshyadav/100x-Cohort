const express = require('express')
const bodyParser = require("body-parser")
const app = express()
const port = 3000

app.use(bodyParser.json());

function calculateSum(n){
  let ans=0;
  for(let i=1; i<=n; i++){
    ans+=i;
  }

  return ans;
}

app.get("/sum", (req, res) => {
  // res.send('Hello World!')

  const n=req.query.n;
  const sum=calculateSum(n);
  res.send("Hi your ans is: "+ sum);
})

app.post("/conversations", (req, res) => {
  console.log(req.body);
  res.send({
    msg: "Message Read"
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})