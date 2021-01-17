const express = require('express')

const app = express()

const port = 3000

app.get("/", (req, res) => {
  res.send("Hello Express!");
})

app.get("/home/user/:name/:age", (req, res) => {
  res.send(`Welcome ${req.params.name}, you're ${req.params.age} years old`)
})

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}.`);
})