const express = require('express')
const app = express()

//middlewares

app.use((req, res, next) => {
console.log(req.method, req.url);
next() })
app.get('/', function (req, res) {
    res.send('Hello World')
  })
app.listen(4000, () => {
  console.log("server is listening on port 4k");
});


