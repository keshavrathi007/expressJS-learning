const express = require("express");
const app = express()
const port = 8000
//install hbs for template engine
//hbs is a view engine
//to set the view engine
app.set('view engine', 'hbs')//telling what view engine we using

//template engine route
//dynamic content with express
app.get('/', function (req, res) {
    res.render('index')
})

app.get("/", (req, res) => {
    res.send("hello from express server")
})
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})